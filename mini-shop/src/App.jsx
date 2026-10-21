import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";

//map() updates items, filter() removes items, and find() searches for an item. , reduce used for calculations

// Read the saved cart from localStorage (or start with an empty cart)
function getSavedCart() {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function App() {
  const [cart, setCart] = useState(getSavedCart);

  // Save the cart every time it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Same product again: increase quantity, no duplicate entry
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item  //leaves all other cart items unchanged.  
        )
      );
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      };
      setCart([...cart, newItem]);//adds the new product at the end.
    }
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  // Total number of items (sum of all quantities)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Navbar totalItems={totalItems} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Products addToCart={addToCart} />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                totalItems={totalItems}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="*" element={<p className="message">Page not found.</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
