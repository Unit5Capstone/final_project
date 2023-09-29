import { React, useEffect, useState } from "react";
import Authenticate from "./Authenticate";
import SignUpForm from "./SignUpForm";
import axios from "axios";

const Home = () => {
  const [movieData, setmovieData] = useState([]);
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

  return (
    <div className="home">
      <h1>Welcome Back</h1>
      {movieList}
    </div>
  );
};
export default Home;
