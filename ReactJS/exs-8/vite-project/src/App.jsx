import { useEffect, useState } from "react";

function App() {
  const [inputTime, setInputTime] = useState("");
  const [time, setTime] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || time <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, time]);

  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
    }
  }, [time]);

  function handleStart() {
    if (inputTime !== "") {
      setTime(Number(inputTime));
      setIsRunning(true);
    }
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setTime(Number(inputTime));
  }

  return (
    <>
      <h1>Countdown Timer</h1>

      <label>
        Set Time (seconds):{" "}
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
        />
      </label>

      <h3>Time Left: {time !== "" ? `${time} seconds` : ""}</h3>

      <button onClick={handleStart} disabled={isRunning || inputTime === ""}>
        Start
      </button>

      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>

      <button onClick={handleReset} disabled={inputTime === ""}>
        Reset
      </button>
    </>
  );
}

export default App;
