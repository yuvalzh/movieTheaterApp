import Seat from "../Seat/Seat.js";
import React, { useState } from "react";
import { ChooseSeatContainer, SubmitButton } from "./ChooseSeat.styled";
import { Row } from "./ChooseSeat.styled.js";

const ChooseSeat = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (row, number) => {
    setSelectedSeat(`${row}-${number}`);
  };

  const renderSeat = (row, number) => {
    //create a unique identifier for each seat in the theater
    const seatId = `${row}-${number}`;
    const status = selectedSeat === seatId ? "selected" : "available";
    return (
      <Seat
        key={seatId}
        row={row}
        number={number}
        onSeatClick={handleSeatClick}
        status={status}
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

  return (
    <ChooseSeatContainer>
      <div>{renderRows()}</div>
      <SubmitButton>submit</SubmitButton>
    </ChooseSeatContainer>
  );
};

export default ChooseSeat;
