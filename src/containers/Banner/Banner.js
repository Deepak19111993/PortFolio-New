import React from "react";
import { BtnWrapper, CustomButton } from "../../assets/styles/Global.styles";
import {
  BannerImg,
  BannerInner,
  BannerLeft,
  BannerPera,
  BannerRight,
  BannerTitleName,
  BannerWrapper,
  Designation,
} from "./Banner.styles";
import bannerImg from "../../assets/images/banner-img.png";
import { useLocation } from "react-router";

const Banner = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/portfolio" || location.pathname === "/getcv" ? (
        ""
      ) : (
        <BannerWrapper>
          <div className="container">
            <BannerInner>
              <BannerLeft>
                <BannerTitleName>hello, im deepak</BannerTitleName>
                <Designation>html developer / front end developer</Designation>
                <BannerPera>
                  Freelance Html Developer / Front End Developer based in
                  bekasi, Let’s Work Together.
                </BannerPera>
                <BtnWrapper>
                  <CustomButton href="/contact" className="filled">
                    hire me
                  </CustomButton>
                  {/* <CustomButton
                    href={myFile}
                    download="Deepak Resume"
                    // target="_blank"
                  >
                    get cv
                  </CustomButton> */}
                  <CustomButton href="/getcv">get cv</CustomButton>
                </BtnWrapper>
              </BannerLeft>
              <BannerRight>
                <BannerImg src={bannerImg} alt="" />
              </BannerRight>
            </BannerInner>
          </div>
        </BannerWrapper>
      )}
    </>
  );
};

export default Banner;
