import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      username,
      email,
      password,
      country,
      agree,
    });
  };

  return (
    <>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />

        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />

        <br />
        <br />

        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option value="Somalia">Somalia</option>
          <option value="Kenya">Kenya</option>
          <option value="Ethiopia">Ethiopia</option>
        </select>

        <br />

        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to the terms
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Information</h2>

          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Country: {submittedData.country}</p>
          <p>Agree to terms: {submittedData.agree ? "Yes" : "No"}</p>
        </div>
      )}
    </>
  );
}

export default App;
