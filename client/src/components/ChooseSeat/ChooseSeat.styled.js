import styled from "styled-components";

export const ChooseSeatContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  font-family: "Century Gothic", sans-serif;
  font-size: 22px;
  color: white; /* Change the button text color */
  background-color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 8px;

  &:hover {
    background-color: #ff69b4;
  }
`;
