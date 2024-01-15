import styled from "styled-components";

export const CRUDButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  font-family: "Century Gothic", sans-serif;
  font-size: 15px;
  color: white; /* Change the button text color */
  background-color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 8px;
  margin-block: 20px 20px;
  &:hover {
    background-color: DodgerBlue;
  }
`;
