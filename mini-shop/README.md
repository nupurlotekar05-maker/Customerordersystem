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

React (Vite), JavaScript, React Hooks (`useState`, `useEffect`), React Router, plain CSS

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

## Deployment

- **Vercel:** import the GitHub repo, keep the default Vite settings, click Deploy. `vercel.json` makes page refreshes on routes like `/product/3` work.
- **Netlify:** import the repo, build command `npm run build`, publish directory `dist`. `public/_redirects` handles routing.

Live demo: _add your URL here_

## Submit to GitHub

```bash
git init
git add .
git commit -m "Mini e-commerce app"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(Create the empty repository on github.com first.)
