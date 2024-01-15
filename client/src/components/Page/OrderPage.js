import MovieDetails from "../MovieDetails/MovieDetails.js";
import ChooseSeat from "../ChooseSeat/ChooseSeat.js";
import HomeButton from "../HomeButton/HomeButton.js";
import * as ScreeningApi from "../../api/screeningApi.js";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { OrderPageContainer, TitleContainer } from "./OrderPage.styled.js";

const OrderPage = () => {
  const [screening, setScreening] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchScreening = async () => {
      try {
        const id = queryParams.get("id");
        const screeningResponse = await ScreeningApi.getScreeningById(id);
        console.log("response:" + screeningResponse);
        setScreening(screeningResponse);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchScreening();
  }, []);

  return (
    <OrderPageContainer>
      <TitleContainer> Order Page </TitleContainer>
      {screening && <MovieDetails movie={screening.movieId} />}
      <ChooseSeat></ChooseSeat>
      <HomeButton></HomeButton>
    </OrderPageContainer>
  );
};

export default OrderPage;
