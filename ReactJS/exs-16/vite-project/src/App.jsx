import { CartProvider } from "./CartContext";
import Product from "./Product";
import CartSummary from "./CartSummary";

function App() {
  return (
    <CartProvider>
      <Product name="Widget" price={19.99} />

      <Product name="Gadget" price={29.99} />

      <CartSummary />
    </CartProvider>
  );
}

export default App;
