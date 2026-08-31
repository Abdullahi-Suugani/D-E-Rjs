import { useCart } from "./CartContext";

function CartSummary() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Cart Summary</h2>

      <p>Total Items: {cart.length}</p>

      {cart.length > 0 && (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartSummary;
