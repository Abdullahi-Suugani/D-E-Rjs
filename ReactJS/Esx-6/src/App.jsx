import { useEffect, useState } from "react";

function App() {
  // const [name, setName] = useState("welcome");
  const [title, setTitle] = useState("");

  const [greeting, setGreeting] = useState("");

  // useEffect(() => {
  //   document.title = title.trim() === "" ? "welcome" : title;

  //   console.log("title");
  // }, [title]);

  useEffect(() => {
    if (title.trim() === "" && greeting.trim() === "") {
      document.title = "welcome";
    } else if (title.trim() === "") {
      document.title = greeting;
    } else if (greeting.trim() === "") {
      document.title = title;
    } else {
      document.title = `${greeting}, ${title}`;
    }
  }, [title, greeting]);

  return (
    <>
      <h1> Enter Your Nmae </h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h1>Choose a Greeting</h1>
      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
    </>
  );
}

export default App;
