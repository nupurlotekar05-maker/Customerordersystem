import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  // If the image fails to load, show the local placeholder
  // function handleImageError(event) {
  //   event.target.onerror = null; // stop a possible infinite loop
  //   event.target.src = "/placeholder.svg";
  // }

  return (
    <div className="card">
      <img src={product.image} alt={product.name}  />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <p>{product.category}</p>
      <p>⭐ {product.rating}</p>
      <div className="card-buttons">
        <Link to={`/product/${product.id}`} className="btn btn-outline">
          View Details
        </Link>
        <button className="btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
