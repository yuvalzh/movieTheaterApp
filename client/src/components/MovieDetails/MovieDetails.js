import React from "react";

import {
  MovieDetailsContainer,
  NameMovie,
  DescriptionMovie,
  LengthMovie,
  DateMovie,
} from "./MovieDetails.styled";

const MovieDetails = () => {
  return (
    <MovieDetailsContainer>
      <NameMovie>A look at the relationship</NameMovie>
      <DescriptionMovie>
        The beginning of their love affair caused astonishment and shock, when
        Gracie (Julianne Moore) was 36 years old and Joe (Charles Melton) was
        only 13. Now, 20 years later, they seem to lead a quiet and comfortable
        life in the suburbs. The happiness in this family unit is shattered when
        Elizabeth (Natalie Portman), a famous actress, comes to the closed
        community to get to know Gracie, whom she will play in her new film. As
        Elizabeth tries to fit into the couple's day-to-day life, uncomfortable
        facts about their scandal come to light and bring dormant emotions to
        the surface. The film's director, Todd Haynes, explores one of the
        extraordinary abilities of the human race, our ability not to look
        ourselves in the eye.
      </DescriptionMovie>
      <LengthMovie>117 Minute</LengthMovie>
      <DateMovie>25/11/2023</DateMovie>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
