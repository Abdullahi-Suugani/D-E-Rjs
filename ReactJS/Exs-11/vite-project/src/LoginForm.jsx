import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  }

  if (isLoggedIn) {
    return (
      <>
        <h1>Welcome, {username}!</h1>

        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <br />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginForm;
