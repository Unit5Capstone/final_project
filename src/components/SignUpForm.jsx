import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.length <= 0 || password.length <= 0) {
      alert(
        "Please enter valid credentials, or create an account to gain access."
      );
    } else {
      try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          }
        );
        const result = await response.json();
        setToken(result.token);
        console.log(result);
        setUsername("");
        setPassword("");
        navigate("/home");
      } catch (error) {
        setError(error.message);
      }
    }
  }
  async function handleSubmitTwo(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const result = await response.json();
      setToken(result.token);
      console.log(result);
      setUsername("");
      setPassword("");
      navigate("/accountcreation");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="">
      <h2>MoView</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username{""}</label>
        <input
          className="authpage"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password{""}</label>
        <input
          className="authpage"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login button">Log In</button>
      </form>
      <form onSubmit={handleSubmitTwo}>
        <button className="signup button">Sign Up</button>
      </form>
    </div>
  );
}
