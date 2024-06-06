/* TODO - add your code to create a functional React component that renders a login form */

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [login, setLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setLogin(true);
        sessionStorage.setItem('token', data.token);
        console.log("data:",data.token);
        setEmail("");
        setPassword("");
        setTimeout(() => {
          setLogin(false);
        }, 3000);
      } else {
        setError("Login failed");
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    } catch (err) {
      setError("Login failed");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {error && (
        <p
          style={{
            color: "red",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          {error}
        </p>
      )}
      {login && (
        <p
          style={{
            color: "green",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Login successful
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
