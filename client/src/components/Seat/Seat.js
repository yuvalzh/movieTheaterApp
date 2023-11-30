import React from "react";
import { SeatContainer } from "./Seat.styled";

const Seat = ({ row, number, status, onSeatClick }) => {
  return (
    <SeatContainer
      disabled={status !== "available"}
      status={status}
      onClick={() => onSeatClick(row, number)}
    ></SeatContainer>
  );
};

export default Seat;
