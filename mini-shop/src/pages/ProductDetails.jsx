import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";

function ProductDetails({ addToCart }) {
  const { id } = useParams(); // id from the URL is always a string
  const product = products.find((p) => p.id === Number(id));

  // Invalid product id
  if (!product) {
    return (
      <div>
        <p className="message">Product not found.</p>
        <Link to="/" className="btn">
          Back to Products
        </Link>
      </div>
    );
  }

  // function handleImageError(event) {
  //   event.target.onerror = null;
  //   event.target.src = "/placeholder.svg";  onError={handleImageError}
  // }

  return (
    <div className="details">
      <img src={product.image} alt={product.name}  />
      <div className="details-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p>Category: {product.category}</p>
        <p>⭐ {product.rating}</p>
        <p>{product.description}</p>
        <div className="card-buttons">
          <button className="btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <Link to="/" className="btn btn-outline">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
