import MovieDetails from "../MovieDetails/MovieDetails.js";
import ChooseSeat from "../ChooseSeat/ChooseSeat.js";
import { MovieOrderPageContainer } from "./MovieOrderPage.styled.js";

const MovieOrderPage = () => {
  return (
    <MovieOrderPageContainer>
      <MovieDetails></MovieDetails>
      <ChooseSeat></ChooseSeat>
    </MovieOrderPageContainer>
  );
};

export default MovieOrderPage;
