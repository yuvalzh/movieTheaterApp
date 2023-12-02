import React, { useState } from "react";
import Seat from "../Seat/Seat.js";
import { Row } from "./SeatMap.styled";

const SeatMap = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (row, number) => {
    setSelectedSeat(`${row}-${number}`);
  };

  const renderSeat = (row, number) => {
    //create a unique identifier for each seat in the theater
    const seatId = `${row}-${number}`;
    // const status = selectedSeat === seatId ? "selected" : "available";
    return (
      <Seat
        key={seatId}
        row={row}
        number={number}
        onSeatClick={handleSeatClick}
      />
    );
  };

  const renderRows = () => {
    const rows = [];
    for (let row = 1; row <= 10; row++) {
      const seats = [];
      for (let number = 1; number <= 10; number++) {
        seats.push(renderSeat(row, number));
      }
      rows.push(<Row key={row}>{seats}</Row>);
    }
    return rows;
  };

  return <div>{renderRows()}</div>;
};

export default SeatMap;
