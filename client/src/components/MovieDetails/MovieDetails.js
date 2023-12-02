import React from "react";

import {
  MovieDetailsContainer,
  MovieTitle,
  MovieDescription,
  MovieDuration,
} from "./MovieDetails.styled";

const MovieDetails = ({ movie }) => {
  return (
    <MovieDetailsContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieDescription>{movie.description}</MovieDescription>
      <MovieDuration>{movie.duration}</MovieDuration>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
