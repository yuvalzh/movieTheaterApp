import MovieDetails from "../MovieDetails/MovieDetails.js";
import ChooseSeat from "../ChooseSeat/ChooseSeat.js";
import { useLocation } from "react-router-dom";
import { OrderPageContainer } from "./OrderPage.styled.js";
import { useState, useEffect } from "react";
import * as ScreeningApi from "../../api/screeningApi.js";

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
      {screening && <MovieDetails movie={screening.movieId} />}
      <ChooseSeat></ChooseSeat>
    </OrderPageContainer>
  );
};

export default OrderPage;
