import { React, useEffect, useState } from "react";
import Authenticate from "./Authenticate";
import SignUpForm from "./SignUpForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export default function AccountCreation({ setToken }) {
  const [fullname, setFullName] = useState("");
  const [profilename, setProfileName] = useState("");
  const [email, setEmail] = useState("");
  //   const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (fullname.length <= 0 || profilename.length <= 0 || email.length <= 0) {
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
              fullname,
              profilename,
              email,
            }),
          }
        );
        const result = await response.json();
        setToken(result.token);
        console.log(result);
        setFullName("");
        setProfileName("");
        setEmail("");
        navigate("/home");
      } catch (error) {
        setError(error.message);
      }
    }
  }

  return (
    <div>
      <h2>please create an account</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name{""}</label>
        <input
          type="fullname"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Profile Name{""}</label>
        <input
          type="profilename"
          value={profilename}
          onChange={(e) => setProfileName(e.target.value)}
        />
        <label>Email{""}</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="submit button">Submit</button>
      </form>
    </div>
  );
}
