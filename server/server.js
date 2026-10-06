import express from "express";
import cors from "cors";
import crypto from "node:crypto";
import { DatabaseSync } from "node:sqlite";

const app = express();

const PORT = Number(process.env.PORT) || 3000;
const FRONTEND_URL =
  process.env.FRONTEND_URL || "http://localhost:5173";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SESSION_SECRET = process.env.SESSION_SECRET;

if (
  !ADMIN_EMAIL ||
  !ADMIN_PASSWORD ||
  !SESSION_SECRET
) {
  throw new Error(
    "ADMIN_EMAIL, ADMIN_PASSWORD und SESSION_SECRET müssen gesetzt sein."
  );
}

const isProduction =
  process.env.NODE_ENV === "production";

const database = new DatabaseSync("./werkprofi.db");

database.exec(`
  PRAGMA journal_mode = WAL;

  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    project_type TEXT NOT NULL,
    budget TEXT,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
`);

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

function createSessionToken(email) {
  const payload = {
    email,
    exp:
      Math.floor(Date.now() / 1000) +
      60 * 60 * 8,
  };

  const encodedPayload = Buffer.from(
    JSON.stringify(payload)
  ).toString("base64url");

  const signature = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(encodedPayload)
    .digest("base64url");

  return `${encodedPayload}.${signature}`;
}

function verifySessionToken(token) {
  if (!token) {
    return null;
  }

  try {
    const [encodedPayload, signature] =
      token.split(".");

    if (!encodedPayload || !signature) {
      return null;
    }

    const expectedSignature = crypto
      .createHmac("sha256", SESSION_SECRET)
      .update(encodedPayload)
      .digest("base64url");

    const receivedBuffer =
      Buffer.from(signature);

    const expectedBuffer =
      Buffer.from(expectedSignature);

    if (
      receivedBuffer.length !==
      expectedBuffer.length
    ) {
      return null;
    }

    if (
      !crypto.timingSafeEqual(
        receivedBuffer,
        expectedBuffer
      )
    ) {
      return null;
    }

    const payload = JSON.parse(
      Buffer.from(
        encodedPayload,
        "base64url"
      ).toString("utf8")
    );

    if (
      !payload.exp ||
      payload.exp <
        Math.floor(Date.now() / 1000)
    ) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

function getCookie(request, name) {
  const cookieHeader =
    request.headers.cookie;

  if (!cookieHeader) {
    return null;
  }

  const cookies = cookieHeader
    .split(";")
    .map((cookie) => cookie.trim());

  const target = `${name}=`;

  const cookie = cookies.find((item) =>
    item.startsWith(target)
  );

  return cookie
    ? decodeURIComponent(
        cookie.slice(target.length)
      )
    : null;
}

function setSessionCookie(response, token) {
  const sameSite = isProduction
    ? "None"
    : "Lax";

  const cookieParts = [
    `werkprofi_session=${encodeURIComponent(token)}`,
    "HttpOnly",
    "Path=/",
    "Max-Age=28800",
    `SameSite=${sameSite}`,
  ];

  if (isProduction) {
    cookieParts.push("Secure");
  }

  response.setHeader(
    "Set-Cookie",
    cookieParts.join("; ")
  );
}

function clearSessionCookie(response) {
  const sameSite = isProduction
    ? "None"
    : "Lax";

  const cookieParts = [
    "werkprofi_session=",
    "HttpOnly",
    "Path=/",
    "Max-Age=0",
    `SameSite=${sameSite}`,
  ];

  if (isProduction) {
    cookieParts.push("Secure");
  }

  response.setHeader(
    "Set-Cookie",
    cookieParts.join("; ")
  );
}

function requireAdmin(request, response, next) {
  const token = getCookie(
    request,
    "werkprofi_session"
  );

  const session =
    verifySessionToken(token);

  if (!session) {
    return response.status(401).json({
      success: false,
      message: "Nicht autorisiert.",
    });
  }

  request.admin = session;

  next();
}

/* ================================
   Health
================================ */

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "WerkProfi API läuft.",
  });
});

/* ================================
   Authentication
================================ */

app.post("/api/auth/login", (req, res) => {
  const { email, password } =
    req.body;

  if (
    email !== ADMIN_EMAIL ||
    password !== ADMIN_PASSWORD
  ) {
    return res.status(401).json({
      success: false,
      message:
        "E-Mail oder Passwort ist falsch.",
    });
  }

  const token =
    createSessionToken(ADMIN_EMAIL);

  setSessionCookie(res, token);

  return res.json({
    success: true,
    message: "Login erfolgreich.",
    data: {
      email: ADMIN_EMAIL,
    },
  });
});

app.get(
  "/api/auth/me",
  requireAdmin,
  (req, res) => {
    res.json({
      success: true,
      data: {
        email: req.admin.email,
      },
    });
  }
);

app.post("/api/auth/logout", (req, res) => {
  clearSessionCookie(res);

  res.json({
    success: true,
    message: "Logout erfolgreich.",
  });
});

/* ================================
   Contact Requests
================================ */

app.get(
  "/api/contact",
  requireAdmin,
  (req, res) => {
    try {
      const contacts = database
        .prepare(`
          SELECT
            id,
            name,
            email,
            phone,
            project_type AS projectType,
            budget,
            message,
            created_at AS createdAt
          FROM contacts
          ORDER BY id DESC
        `)
        .all();

      return res.json({
        success: true,
        data: contacts,
      });
    } catch (error) {
      console.error(
        "Database error:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Die Anfragen konnten nicht geladen werden.",
      });
    }
  }
);

app.post("/api/contact", (req, res) => {
  const {
    name,
    email,
    phone,
    projectType,
    budget,
    message,
  } = req.body;

  if (!name?.trim()) {
    return res.status(400).json({
      success: false,
      message:
        "Name ist erforderlich.",
    });
  }

  if (!email?.trim()) {
    return res.status(400).json({
      success: false,
      message:
        "E-Mail ist erforderlich.",
    });
  }

  if (!projectType) {
    return res.status(400).json({
      success: false,
      message:
        "Projektart ist erforderlich.",
    });
  }

  if (!message?.trim()) {
    return res.status(400).json({
      success: false,
      message:
        "Nachricht ist erforderlich.",
    });
  }

  try {
    const createdAt =
      new Date().toISOString();

    const statement = database.prepare(`
      INSERT INTO contacts (
        name,
        email,
        phone,
        project_type,
        budget,
        message,
        created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const result = statement.run(
      name.trim(),
      email.trim(),
      phone?.trim() || "",
      projectType,
      budget || "",
      message.trim(),
      createdAt
    );

    return res.status(201).json({
      success: true,
      message:
        "Anfrage erfolgreich gespeichert.",
      data: {
        id: Number(
          result.lastInsertRowid
        ),
        name: name.trim(),
        email: email.trim(),
        projectType,
        createdAt,
      },
    });
  } catch (error) {
    console.error(
      "Database error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Die Anfrage konnte nicht gespeichert werden.",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `WerkProfi API läuft auf http://localhost:${PORT}`
  );
});