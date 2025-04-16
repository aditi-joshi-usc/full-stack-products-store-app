# Full-Stack Products Store App

A fully responsive, CRUD-enabled full-stack web application for managing a product catalog. Built using the MERN stack (MongoDB, Express, React, Node), styled with Chakra UI, and deployed using Render. This app demonstrates how to integrate backend APIs with a modern React frontend and manage global state efficiently using Zustand.

---

## Overview

This application allows users to:
- View all available products
- Add new products with a name, price, and image link
- Edit existing product details via a modal interface
- Delete products from the list
- Experience a polished and responsive UI with light/dark mode support

Each action updates the backend database in real-time using RESTful API calls. The entire application (frontend + backend) is deployed as a single service using Render.

---

## Tech Stack

- **Frontend:** React, Vite, Chakra UI, Zustand, React Router, React Icons
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Deployment:** Render
- **Dev Tools:** ESLint, Nodemon, Cross-env

---

## Project Structure

```
full-stack-products-store-app/
│
├── backend/                 # Express backend API
│   ├── controllers/         # Logic for product routes
│   ├── models/              # Mongoose schema
│   ├── routes/              # API endpoints
│   └── server.js            # Server entry
│
├── frontend/                # React + Vite frontend
│   ├── src/
│   │   ├── components/      # UI components (Navbar, ProductCard)
│   │   ├── pages/           # HomePage, CreatePage
│   │   └── store/           # Zustand store
│   └── vite.config.js       # Vite config with API proxy
│
├── .env                     # Environment variables
├── package.json             # Combined scripts for full app
└── README.md
```

---

## Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/aditi-joshi-usc/full-stack-products-store-app.git
cd full-stack-products-store-app

# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

### 2. Set Environment Variables

Create a `.env` file in the root folder:

```env
MONGO_URI=your_mongodb_connection_uri
PORT=5000
```

### 3. Run Development Servers

From the root directory:

```bash
npm run dev
```

- Frontend runs on: `http://localhost:5173`
- Backend runs on: `http://localhost:5000`

---

## Production Deployment (Render)

- One Render Web Service hosts both the frontend (built with `vite build`) and backend (via Express).
- MongoDB Atlas is used as the cloud database.
- The Express server statically serves the React app from `frontend/dist/`.

To build and run locally for production:

```bash
npm run build
npm start
```

---

## Key Features Explained

### Product Management
Each product has a:
- Name
- Price
- Image URL

CRUD operations:
- **Add:** Form on `/create` route
- **Edit:** Modal popup with live fields
- **Delete:** Click trash icon with immediate update

### Responsive UI
- Chakra UI ensures a polished and modern layout
- Light/dark mode toggle available
- Toast notifications on add/edit/delete

### Global State with Zustand
Zustand manages the product list and handles async calls:
- `fetchProducts()`
- `createProduct()`
- `updateProduct()`
- `deleteProduct()`

---



