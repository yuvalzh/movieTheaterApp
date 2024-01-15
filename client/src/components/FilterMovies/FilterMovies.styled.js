import styled from "styled-components";

export const FilterMoviesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px; /*space between the object*/
  border: 3px solid #333;
  padding: 10px; /* Add padding for spacing */
  border-radius: 30px; /* Add rounded corners for a nice look */
  background-color: LightCyan;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Label = styled.label`
  color: black;
  font-family: "Century Gothic", sans-serif;
  font-size: 20px;
`;

export const TitleFilter = styled.label`
  display: flex;
  align-items: center;
  font-family: "Century Gothic", sans-serif;
  font-size: 25px;
`;
export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  font-family: "Century Gothic", sans-serif;
  font-size: 16px;
  color: white; /* Change the button text color */
  background-color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 8px;

  &:hover {
    background-color: CornflowerBlue;
  }
`;
