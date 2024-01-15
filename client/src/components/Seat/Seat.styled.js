import styled from "styled-components";

export const SeatContainer = styled.div`
  width: 20px;
  height: 20px;
  margin: 2px;
  background-color: ${(props) => {
    switch (props.status) {
      case "selected":
        return "LightSkyBlue";
      case "unavailable":
        return "LightCoral";
      default:
        return "LightGreen";
    }
  }};
  cursor: pointer;
`;
