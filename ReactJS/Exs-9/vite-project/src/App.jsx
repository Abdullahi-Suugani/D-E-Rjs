import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (searchUsername === "") {
      return;
    }

    async function fetchUser() {
      const response = await fetch(
        `https://api.github.com/users/${searchUsername}`,
      );

      const data = await response.json();

      setUser(data);
    }

    fetchUser();
  }, [searchUsername]);

  function handleSearch() {
    setSearchUsername(username);
  }

  return (
    <>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {user && (
        <div>
          <h2>{user.name}</h2>

          <img src={user.avatar_url} alt={user.login} width="100" />

          <p>Location: {user.location || "N/A"}</p>

          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}
    </>
  );
}

export default App;
