import React from "react";
import { MovieContainer, MovieTitle } from "./Movie.styled";
import CRUDButton from "../CRUDButton/CRUDButton.js";
import * as MovieApi from "../../api/movieApi.js";
import { useState } from "react";

const Movie = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  const movieId = movie.id;

  const handleAddScreening = () => {
    // Logic to add a Screening
  };
  const handleDeleteMovie = async (movieId) => {
    try {
      const movieToDelete = await MovieApi.deleteMovie(movieId);
      console.log("response:" + movieToDelete);
      setMovies(movieToDelete);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <MovieContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      <CRUDButton
        buttonText="Add Screening"
        onClick={handleAddScreening}
      ></CRUDButton>
      <CRUDButton
        Button
        buttonText="Delete"
        onClick={handleDeleteMovie(movieId)}
      ></CRUDButton>
    </MovieContainer>
  );
};

export default Movie;
