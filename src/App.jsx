import { useState } from "react";
import "./App.css";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      {/* <SignUpForm token={token} setToken={setToken} /> */}
      <Authenticate token={token} setToken={setToken} />
      <Routes>
        <Route
          path="/"
          element={<SignUpForm token={token} setToken={setToken} />}
        />
        {/* <Route path="/red" element={<Red />} /> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

// const options = {
//   method: "GET",
//   url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
//   headers: {
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//     "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
