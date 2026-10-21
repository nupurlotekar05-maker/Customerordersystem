import { Link } from "react-router-dom";

function Navbar({ totalItems }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Mini Shop
      </Link>
      <div className="nav-links">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
