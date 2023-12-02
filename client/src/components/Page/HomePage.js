import { useState, useEffect } from "react";
import ScreeningsList from "../ScreeningList/ScreeningList.js";
import { HomePageContainer } from "./HomePage.styled.js";
import FilterMovies from "../FilterMovies/FilterMovies.js";
import * as ScreeningApi from "../../api/screeningApi.js";

const HomePage = () => {
  const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    const fetchScreenings = async () => {
      try {
        const screeningResponse = await ScreeningApi.getScreenings();
        console.log("response:" + screeningResponse);
        setScreenings(screeningResponse);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchScreenings();
  }, []);

  return (
    <HomePageContainer>
      <FilterMovies setScreenings={setScreenings}></FilterMovies>
      <ScreeningsList screenings={screenings}></ScreeningsList>
    </HomePageContainer>
  );
};

export default HomePage;
