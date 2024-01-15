import styled from "styled-components";

export const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: SlateGrey;
  height: 100vh;
  width: 100%;
  gap: 30px;
  padding: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black; /* Creates a frame-like border */
  width: 40%;
  padding: 20px; /* Optional: Adds some space inside the frame */
`;

export const ScreeningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black; /* Creates a frame-like border */
  width: 40%;
  padding: 20px; /* Optional: Adds some space inside the frame */
`;

export const TitleContainer = styled.h1`
  display: flex;
`;
