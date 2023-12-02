import React from "react";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { ScreeningContainer } from "./Screening.styled";

const Screening = ({ screening }) => {
  const date = new Date(screening.startTime);

  const dateFormat = useMemo(() => {
    const day = date.getUTCDate(); // Get the day of the month
    const month = date.getUTCMonth() + 1; // Get the month (add 1 because months are zero-indexed)
    const year = date.getUTCFullYear(); // Get the year
    // Format the date string as "DD/MM/YYYY"
    const formattedDate = `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
    return formattedDate;
  }, []);

  const timeFormat = useMemo(() => {
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
  }, []);

  const navigate = useNavigate();

  const onScreeningClicked = (id) => {
    navigate("/order" + "/?id=" + id);
  };

  return (
    <ScreeningContainer
      onClick={() => onScreeningClicked(screening._id)}
      link="/props.name"
    >
      <h4> {screening.movieId.title} </h4>
      <date>{dateFormat}</date>
      <time>{timeFormat}</time>
    </ScreeningContainer>
  );
};

export default Screening;
