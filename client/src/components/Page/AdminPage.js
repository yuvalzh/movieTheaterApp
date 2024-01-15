import HomeButton from "../HomeButton/HomeButton.js";
import CRUDButton from "../CRUDButton/CRUDButton.js";
import { useState, useEffect } from "react";
import * as MovieApi from "../../api/movieApi.js";
import {
  AdminPageContainer,
  TitleContainer,
  ContentContainer,
  MovieContainer,
  ScreeningContainer,
} from "./AdminPage.styled.js";
import MovieList from "../MovieList/MovieList.js";

const AdminPage = () => {
  const [movies, setMovies] = useState([]);

  //fix this
  const handleAddMovie = async (movie) => {
    // try {
    //   const movieToAdd = await MovieApi.createMovie(movie);
    //   console.log("response:" + movieToAdd);
    //   setMovies(movieToAdd);
    // } catch (error) {
    //   console.error("Error fetching data", error);
    // }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesResponse = await MovieApi.getMovies();
        console.log("response:" + moviesResponse);
        setMovies(moviesResponse);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <AdminPageContainer>
      <TitleContainer> Admin Page </TitleContainer>
      <ContentContainer>
        <MovieContainer>
          <TitleContainer> Movie </TitleContainer>
          <MovieList movies={movies}></MovieList>
          <CRUDButton
            buttonText="Add Movie"
            onClick={handleAddMovie}
          ></CRUDButton>
        </MovieContainer>

        <ScreeningContainer>
          <TitleContainer> Screening </TitleContainer>
        </ScreeningContainer>
      </ContentContainer>

      <HomeButton></HomeButton>
    </AdminPageContainer>
  );
};

export default AdminPage;
