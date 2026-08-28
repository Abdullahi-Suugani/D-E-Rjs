import { useEffect, useState } from "react";

function App() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(e) {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Mouse X: {mouse.x}</h3>
      <h3>Mouse Y: {mouse.y}</h3>
    </>
  );
}

export default App;
