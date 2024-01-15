import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  background-color: Gainsboro;
  border-radius: 40px;
  font-family: "Century Gothic", sans-serif;
  font-size: 20px;
  padding: 10px;
  width: 700px;
`;

export const MovieTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const MovieDescription = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const MovieDuration = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;
