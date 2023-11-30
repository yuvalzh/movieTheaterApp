import React from "react";
import SeatMap from "../SeatMap/SeatMap.js";
import { ChooseSeatContainer, SubmitButton } from "./ChooseSeat.styled";

const ChooseSeat = () => {
  return (
    <ChooseSeatContainer>
      <SeatMap></SeatMap>
      <SubmitButton>submit</SubmitButton>
    </ChooseSeatContainer>
  );
};

export default ChooseSeat;
