import { useReducer } from "react";

const initialState = {
  counterA: 0,
  counterB: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_A":
      return {
        ...state,
        counterA: state.counterA + 1,
      };

    case "DECREMENT_A":
      return {
        ...state,
        counterA: state.counterA - 1,
      };

    case "INCREMENT_B":
      return {
        ...state,
        counterB: state.counterB + 1,
      };

    case "DECREMENT_B":
      return {
        ...state,
        counterB: state.counterB - 1,
      };

    case "RESET_ALL":
      return initialState;

    default:
      return state;
  }
}

function DoubleCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Double Counter</h1>

      <h2>Counter A: {state.counterA}</h2>

      <button onClick={() => dispatch({ type: "DECREMENT_A" })}>- A</button>

      <button onClick={() => dispatch({ type: "INCREMENT_A" })}>+ A</button>

      <h2>Counter B: {state.counterB}</h2>

      <button onClick={() => dispatch({ type: "DECREMENT_B" })}>- B</button>

      <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+ B</button>

      <br />

      <button onClick={() => dispatch({ type: "RESET_ALL" })}>
        Reset Both
      </button>
    </div>
  );
}

export default DoubleCounter;
