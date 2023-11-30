import React from "react";
import { useNavigate } from "react-router-dom";

import { MovieContainer, MovieItem } from "./Movie.styled";

const Movie = ({ movie, onClick }) => {
  const navigate = useNavigate();

  const onMovieClicked = (id) => {
    navigate("/order" + "/?id=" + id);
  };

  return (
    <MovieContainer onClick={() => onMovieClicked(movie.id)} link="/props.name">
      <h1>movie 1</h1>
      <date>25/11/2023</date>
      <time>19:00</time>
    </MovieContainer>
  );
};

export default Movie;
