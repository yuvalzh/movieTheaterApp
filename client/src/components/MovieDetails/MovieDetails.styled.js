import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  background-color: LightGray;
  border-radius: 40px;
  font-family: "Century Gothic", sans-serif;
  font-size: 20px;
  padding: 10px;
  width: 700px;
`;

export const NameMovie = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const DescriptionMovie = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const LengthMovie = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const DateMovie = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;
