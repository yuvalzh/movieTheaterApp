import { useState } from "react";
import MovieList from "../MovieList/MovieList.js";
import { HomePageContainer } from "./HomePage.styled.js";
import FilterMovies from "../FilterMovies/FilterMovies.js";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  return (
    <HomePageContainer>
      <FilterMovies setMovies={setMovies}></FilterMovies>
      <MovieList movies={movies}></MovieList>
    </HomePageContainer>
  );
};

export default HomePage;
