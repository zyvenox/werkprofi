import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiveDetails/index"
import Privacy from "./pages/Privacy";
import Imprint from "./pages/Imprint"
import AdminContacts from "./pages/AdminContacts";

import AdminLogin from "./pages/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,

        handle: {
          meta: {
            title: "WerkProfi | Technische Dienstleistungen",
            description:
              "Moderne und zuverlässige Lösungen für technische Dienstleistungen und Gebäudetechnik.",
          },
        },
      },

      {
        path: "services",
        element: <Services />,

        handle: {
          meta: {
            title: "Leistungen | WerkProfi",
            description:
              "Entdecken Sie die technischen Dienstleistungen und Lösungen von WerkProfi.",
          },
        },
      },

      {
        path: "services/:slug",
        element: <ServiceDetails />,

        handle: {
          meta: {
            title: "Leistung | WerkProfi",
            description:
              "Professionelle technische Lösungen und zuverlässiger Service von WerkProfi.",
          },
        },
      },

      {
        path: "about",
        element: <About />,

        handle: {
          meta: {
            title: "Über uns | WerkProfi",
            description:
              "Erfahren Sie mehr über WerkProfi, unsere Werte und unsere Arbeitsweise.",
          },
        },
      },

      {
        path: "contact",
        element: <Contact />,

        handle: {
          meta: {
            title: "Kontakt | WerkProfi",
            description:
              "Kontaktieren Sie WerkProfi für Fragen, Projekte und technische Anfragen.",
          },
        },
      },

      {
        path: "privacy",
        element: <Privacy />,

        handle: {
          meta: {
            title: "Datenschutz | WerkProfi",
            description:
              "Datenschutzhinweise der WerkProfi Website.",
          },
        },
      },

      {
        path: "imprint",
        element: <Imprint />,

        handle: {
          meta: {
            title: "Impressum | WerkProfi",
            description:
              "Impressum und rechtliche Informationen zu WerkProfi.",
          },
        },
      },
    ],
  },
  {
  path: "admin/contacts",
  element: <AdminContacts />,
  handle: {
    meta: {
      title: "Kontaktanfragen | WerkProfi",
      description:
        "Verwaltung der Kontaktanfragen von WerkProfi.",
    },
  },
},

  {
    path: "*",
    element: <NotFound />,

    handle: {
      meta: {
        title: "404 | WerkProfi",
        description:
          "Die angeforderte Seite konnte nicht gefunden werden.",
      },
    },
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },

  {
    path: "/admin/contacts",
    element: <AdminContacts />,
  },
]);

export default router;