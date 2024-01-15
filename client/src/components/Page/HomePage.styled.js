import styled from "styled-components";
export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: DarkTurquoise;
  height: 100vh;
  width: 100%;
  gap: 30px;
  padding: 20px;
`;

export const TitleContainer = styled.h1`
  display: flex;
`;

export const AdminButton = styled.button`
  display: flex;
  justify-content: center;
  font-family: "Century Gothic", sans-serif;
  font-size: 22px;
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
