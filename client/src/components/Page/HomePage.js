import ScreeningsList from "../ScreeningList/ScreeningList.js";
import FilterMovies from "../FilterMovies/FilterMovies.js";
import * as ScreeningApi from "../../api/screeningApi.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomePageContainer,
  TitleContainer,
  AdminButton,
} from "./HomePage.styled.js";

const HomePage = () => {
  const [screenings, setScreenings] = useState([]);
  const navigate = useNavigate();

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

  const onAdminClicked = (id) => {
    navigate("/admin");
  };

  return (
    <HomePageContainer>
      <TitleContainer> Home Page </TitleContainer>
      <FilterMovies setScreenings={setScreenings}></FilterMovies>
      <ScreeningsList screenings={screenings}></ScreeningsList>
      <AdminButton onClick={onAdminClicked}> Admin Page </AdminButton>
    </HomePageContainer>
  );
};

export default HomePage;
