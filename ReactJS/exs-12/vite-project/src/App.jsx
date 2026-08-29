import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={handleDecrement} disabled={count === 0}>
        Decrement
      </button>

      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default App;
