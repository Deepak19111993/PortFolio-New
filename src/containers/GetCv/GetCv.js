import React from "react";
import { CustomButton } from "../../assets/styles/Global.styles";
import { GetCvWrapper } from "./GetCv.styles";
import GetCvBlock from "./GetCvBlock";
import cv from "../../assets/images/cv.png";

const GetCv = () => {
  return (
    <GetCvWrapper>
      <div className="container">
        <GetCvBlock />
      </div>
    </GetCvWrapper>
  );
};

export default GetCv;
