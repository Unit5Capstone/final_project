import { React, useEffect, useState } from "react";
import Authenticate from "./Authenticate";
import SignUpForm from "./SignUpForm";
import AccountCreation from "./AccountCreation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Profile from "./Profile";
import MakePost from "./MakePost";

const Home = () => {
  const [movieData, setmovieData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getMovieData() {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",

        headers: {
          "X-RapidAPI-Key":
            "84de910d50mshe4756b30e6b038bp1ae807jsn41d4f38e0837",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setmovieData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getMovieData();
  }, []);
  console.log(movieData);
  const movieList = movieData.map((movie) => {
    console.log(movie, movie.primaryImage);
    return (
      <div>
        <p>{movie.originalTitleText.text}</p>
        <img
          src={movie.primaryImage && movie.primaryImage.url}
          width="450px"
          height="450px"
        />
      </div>
    );
  });
  function clickMe() {
    alert("You are already home! Please navigate to another page.");
  }
  return (
    <>
      <button className="browse button" onClick={() => navigate("/")}>
        Log Out
      </button>
      <div className="homebutton">
        <button onClick={clickMe}>Home</button>
        {/* <div className="profilebutton"> */}

        <button onClick={() => navigate("/makepost")}>Post</button>
        <p>Search </p>
        <input
          className="searchbar"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="homefeed">
          <h1>Welcome Back</h1>
          <h3>...here are some upcoming movies </h3>
          <div>{movieList}</div>
        </div>
      </div>
    </>
  );
};
export default Home;
