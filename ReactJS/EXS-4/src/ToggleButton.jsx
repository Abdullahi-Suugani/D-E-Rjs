import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h2>The button is {isOn ? "ON" : "OFF"}</h2>

      <button onClick={handleToggle}>{isOn ? "Turn OFF" : "Turn ON"}</button>
    </div>
  );
}

export default ToggleButton;
