import { Link } from "react-router-dom";

function Cart({
  cart,
  totalItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  // Empty cart message
  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p className="message">Your cart is empty.</p>
        <Link to="/" className="btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  // Total price = sum of (price x quantity) for every item
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            // onError={(e) => {
            //   e.target.onerror = null;
            //   e.target.src = "/placeholder.svg";
            // }}
          />
          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
          <div className="quantity">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
          <p className="item-total">₹{item.price * item.quantity}</p>
          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ₹{totalPrice}</p>
      </div>
    </div>
  );
}

export default Cart;
