import { useState } from "react";
import "./App.css";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AccountCreation from "./components/AccountCreation";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <Routes>
        <Route
          path="/"
          element={<SignUpForm token={token} setToken={setToken} />}
        />

        <Route path="/home" element={<Home />} />
        <Route path="/accountcreation" element={<AccountCreation />} />
      </Routes>
    </>
  );
}
