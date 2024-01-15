import Screening from "../Screening/Screening.js";
import { ScreeningListContainer } from "./ScreeningList.styled.js";

const ScreeningList = ({ screenings }) => {
  return (
    <ScreeningListContainer>
      <h2>Movies</h2>
      {screenings.map((screening, key) => {
        return <Screening screening={screening} key={key}></Screening>;
      })}
    </ScreeningListContainer>
  );
};

export default ScreeningList;
