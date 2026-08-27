import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const addToCart = () => {
    const trimmedName = name.trim();
    const productPrice = Number(price);

    if (!trimmedName || !price || productPrice <= 0) {
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: trimmedName,
      price: productPrice,
      quantity: 1,
    };

    setCart((currentCart) => [...currentCart, newProduct]);
    setName("");
    setPrice("");
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setCart((currentCart) =>
      currentCart.filter((product) => product.id !== id)
    );
  };

  return (
    <div>
      <h1>Simple Shopping Cart</h1>

      <h2>Add a Product</h2>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          min="0"
          step="0.01"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <button onClick={addToCart}>Add to Cart</button>
      </div>

      <h2>Products in Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price.toFixed(2)}
              <div>
                Quantity:{" "}
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
              <button onClick={() => removeProduct(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default ShoppingCart;
