# Mini Shop – React E-Commerce App

A simple, responsive mini e-commerce application built with React and Vite for the React Developer Intern take-home assessment.

## Features

- Product listing in a responsive grid (data comes from a local `products.json`)
- Search by product name and filter by category
- Empty state when no products match
- Product details page using React Router (`/product/:id`) with invalid-ID handling
- Shopping cart: add, remove, increase/decrease quantity, total items and total price
- Cart is saved in `localStorage`, so it survives a page refresh
- Image fallback if a product image fails to load

## Tech Stack

Reactjs , JavaScript, React Hooks (`useState`, `useEffect`), React Router, plain CSS

## Setup

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   Navbar.jsx, ProductCard.jsx
  pages/        Products.jsx, ProductDetails.jsx, Cart.jsx
  data/         products.json
  App.jsx       routes + cart state
  main.jsx      app entry point
  index.css     styles
```

