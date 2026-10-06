# WerkProfi

A modern full-stack website concept for a German technical services company.

WerkProfi was built as a portfolio project with a strong focus on modern UI, responsive design, clean React architecture, API integration and practical admin functionality.

## Overview

WerkProfi is a fictional German technical-services company website designed to demonstrate how a professional service business can present its services, generate contact requests and manage incoming inquiries through an admin area.

> **Portfolio Project**
>
> WerkProfi is a fictional concept project created for demonstration and portfolio purposes.

## Features

* Modern responsive business website
* Responsive navigation and mobile menu
* Service overview and dynamic service detail pages
* React Router based routing
* Dynamic SEO metadata
* 404 fallback page
* Contact form with client-side validation
* REST API integration
* Express backend
* SQLite database
* Protected admin login
* Admin contact request management
* Loading, success and error states
* Responsive admin interface

## Pages

```text
/
├── Startseite
├── Leistungen
│   └── Leistungen / :slug
├── Über uns
├── Kontakt
├── Datenschutz
├── Impressum
└── Admin
    ├── Login
    └── Kontaktanfragen
```

## Tech Stack

### Frontend

* React
* JavaScript
* React Router
* Vite
* HTML
* CSS

### Backend

* Node.js
* Express
* REST API

### Database

* SQLite

### Tools

* Git
* GitHub
* VS Code

## Architecture

The project follows a simple layered architecture:

```text
React UI
   ↓
Service Layer
   ↓
API Layer
   ↓
Express Backend
   ↓
SQLite Database
```

Examples:

```text
Contact.jsx
   ↓
contactService.js
   ↓
api.js
   ↓
POST /api/contact
   ↓
SQLite
```

Admin:

```text
Admin Login
   ↓
Authentication
   ↓
Protected API
   ↓
Contact Requests
```

## Project Structure

```text
src/
├── assets/
├── components/
├── data/
├── pages/
├── services/
├── utils/
├── App.jsx
├── main.jsx
├── router.jsx
└── index.css

server/
├── server.js
├── package.json
└── .env.example
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zyvenox/werkprofi.git
cd werkprofi
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 4. Configure environment variables

Create:

```text
.env
```

in the project root:

```env
VITE_API_URL=http://localhost:3000/api
```

Create:

```text
server/.env
```

with:

```env
PORT=3000
FRONTEND_URL=http://localhost:5173

ADMIN_EMAIL=admin@werkprofi.de
ADMIN_PASSWORD=change-this-password
SESSION_SECRET=change-this-secret
```

### 5. Start the backend

From the `server` folder:

```bash
npm run dev
```

### 6. Start the frontend

From the project root:

```bash
npm run dev
```

The application runs locally on:

```text
Frontend
http://localhost:5173
```

Backend:

```text
http://localhost:3000
```

Admin:

```text
http://localhost:5173/admin/login
```

## Admin Area

The admin area provides access to incoming contact requests.

Authentication is handled by the backend and the admin session is stored in an HTTP-only cookie.

For production deployment, additional security measures such as stronger authentication, rate limiting and production-grade secret management should be added.

## Design Goals

The project focuses on:

* Clean visual hierarchy
* Responsive layouts
* Professional business presentation
* Reusable React components
* Separation of UI and API logic
* Practical state management
* Clear user feedback
* Maintainable project structure

## Portfolio Note

WerkProfi is a fictional project created to demonstrate frontend and full-stack development skills.

The company information, contact details, statistics and content shown in the project are illustrative.

## Author

### ZYVENOX

React Frontend Developer building modern, responsive and conversion-focused web experiences.

Open to freelance projects and collaborations.
