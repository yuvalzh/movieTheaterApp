import Movie from "../Movie/Movie.js";
import { MovieListContainer } from "./MovieList.styled.js";

const MovieList = ({ movies }) => {
  return (
    <MovieListContainer>
      {movies.map((movie, key) => {
        return <Movie movie={movie} key={key}></Movie>;
      })}
    </MovieListContainer>
  );
};

export default MovieList;
