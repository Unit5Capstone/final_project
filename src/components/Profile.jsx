import { React, useEffect, useState } from "react";
// import Authenticate from "./Authenticate";
// import SignUpForm from "./SignUpForm";
// import AccountCreation from "./AccountCreation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Profile from "./Profile";

const MovieFeed = () => {
  const [movieData, setmovieData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getMovieData() {
      const options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/auto-complete",
        params: {
          q: "Quentin tarantino",
        },
        headers: {
          "X-RapidAPI-Key":
            "84de910d50mshe4756b30e6b038bp1ae807jsn41d4f38e0837",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
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
    console.log(movie);
    return (
      <div>
        <p>Data here</p>
      </div>
    );
  });
};
export default MovieFeed;
