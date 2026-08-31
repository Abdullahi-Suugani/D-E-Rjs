import { useCart } from "./CartContext";

function Product({ name, price }) {
  const { addToCart } = useCart();

  const product = {
    name,
    price,
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
