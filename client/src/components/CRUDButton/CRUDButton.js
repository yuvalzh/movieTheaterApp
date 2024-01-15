import React from "react";
import { CRUDButtonContainer } from "./CRUDButton.styled";

const CRUDButton = ({ buttonText, onClick }) => {
  return (
    <CRUDButtonContainer onClick={onClick}>{buttonText}</CRUDButtonContainer>
  );
};

export default CRUDButton;
