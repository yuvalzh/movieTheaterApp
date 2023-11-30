import Movie from "../Movie/Movie.js";
import { MovieListContainer } from "./MovieList.styled.js";

const MovieList = (props) => {
  const movies = [{ id: 1 }];

  return (
    <MovieListContainer>
      <h1>Movies</h1>
      {movies.map((movie, key) => {
        return <Movie movie={movie} key={key}></Movie>;
      })}
    </MovieListContainer>
  );
};

export default MovieList;
