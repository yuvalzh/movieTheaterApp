import DatePicker from "react-datepicker";
import { useState } from "react";
import {
  FilterMoviesContainer,
  InputContainer,
  Label,
  TitleFilter,
  SubmitButton,
} from "./FilterMovies.styled";
import "react-datepicker/dist/react-datepicker.css";

const FilterMovies = ({ setMovies }) => {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  return (
    <FilterMoviesContainer>
      <TitleFilter> Choose a date:</TitleFilter>
      <InputContainer>
        <Label>from:</Label>
        <DatePicker
          selected={dateFrom}
          onChange={(date) => setDateFrom(new Date(date))}
          dateFormat="dd.MM.yyyy"
        />
      </InputContainer>
      <InputContainer>
        <Label>to:</Label>
        <DatePicker
          selected={dateTo}
          onChange={(date) => setDateTo(new Date(date))}
          dateFormat="dd.MM.yyyy"
        />
      </InputContainer>
      <SubmitButton type="submit">Show moves</SubmitButton>
    </FilterMoviesContainer>
  );
};

export default FilterMovies;
