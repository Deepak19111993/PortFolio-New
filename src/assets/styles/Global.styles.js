import styled, { createGlobalStyle, keyframes } from "styled-components";
import banner from "../images/bg-hero.png";
import "animate.css/animate.min.css";
import { fadeInLeft, fadeInRight } from "react-animations";

// const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
// const fadeInRightAnimation = keyframes`${fadeInRight}`;

// export const FadeInLeft = styled.div`
//   animation: 1s ${fadeInLeftAnimation};
// `;
// export const FadeInRight = styled.div`
//   animation: 2s ${fadeInRightAnimation};
//   animation-delay: 2s;
// `;

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #000;
    font-family: 'Poppins', sans-serif;
  }

  .ant-menu-submenu{
      .ant-menu{
          .ant-menu-item{
              height: 30px;
              line-height: 30px;
              &:not(:last-child){
                  margin-bottom: 4px;
              }
          }
      }
  }

  .link-btn{
  border: 1px solid #fff;
  color: #fff;
  background: none;
  outline: none;
  border-radius: 30px;
  padding: 8px 25px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s all;
  @media screen and (max-width: 1440px) {
    font-size: 16px;
    padding: 5px 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
  &:not(:last-child) {
    margin-right: 30px;
    @media screen and (max-width: 1199px) {
      margin-right: 20px;
    }
  }
  &.filled {
    border: 1px solid #fff;
    background: #fff;
    color: #4275fa;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);
    &:hover {
      background: none;
      color: #fff;
      box-shadow: none;
    }
  }
  &:hover {
    background: #fff;
    color: #4275fa;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);
  }
  &.view-btn {
    background: #4175fa;
    border-color: #4175fa;
    color: #fff;
    font-weight: 500;
    text-transform: capitalize;
    display: flex;
    width: fit-content;
    justify-content: center;
    margin: 30px auto 0;
    @media screen and (max-width: 767px) {
      margin: 20px auto 0;
    }
    &:hover {
      background: none;
      color: #4275fa;
      border-color: #fff;
    }
  }
  &.cv {
    margin: 20px 0 0 auto;
    background: #4175fa;
    border: none;
    &:hover {
      background: none;
    }
  }
}

`;

export const HeroSection = styled.div`
  background: url(${banner}) no-repeat;
  height: auto;
  background-position: bottom;
  background-size: cover;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    margin-bottom: 0;
    padding-bottom: 30px;
  }
  &.port-margin {
    margin-bottom: 20px;
    background: none;
    padding-bottom: 10px;
    @media screen and (max-width: 767px) {
      margin-bottom: 5px;
    }
  }
`;

export const ContentWrapper = styled.div`
  float: left;
  width: 100%;
  margin: 50px auto;
  /* padding: 0 200px; */
  @media screen and (max-width: 1440px) {
    /* padding: 0 150px; */
    margin: 40px auto;
  }
  @media screen and (max-width: 1199px) {
    /* padding: 0 15px; */
    margin: 30px auto;
  }
`;
export const TopTitle = styled.div`
  color: #4275fa;
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: left;
  letter-spacing: 4px;
  @media screen and (max-width: 1600px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media screen and (max-width: 1199px) {
    font-size: 16px;
    line-height: 22px;
  }
  /* @media screen and (max-width: 991px) {
    font-size: 16px;
    line-height: 22px;
  } */
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const Title = styled.h2`
  font-size: 36px;
  line-height: 40px;
  font-weight: 600;
  color: #2e2d56;
  text-align: left;
  margin-bottom: 20px;
  @media screen and (max-width: 1600px) {
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 26px;
    line-height: 30px;
  }
  @media screen and (max-width: 1199px) {
    font-size: 24px;
    line-height: 28px;
  }
  /* @media screen and (max-width: 991px) {
    font-size: 24px;
    line-height: 28px;
  } */
  @media screen and (max-width: 767px) {
    font-size: 22px;
    line-height: 26px;
  }
  &.contact-title {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    @media screen and (max-width: 1600px) {
      font-size: 22px;
    }
    @media screen and (max-width: 1440px) {
      font-size: 20px;
    }
  }
`;

export const SubTitle = styled.h3`
  font-size: 24px;
  line-height: 30px;
  color: #2e2d56;
  margin-bottom: 20px;
  text-align: left;
  @media screen and (max-width: 1600px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1199px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 12px;
  }
  /* @media screen and (max-width: 991px) {
    font-size: 18px;
    line-height: 24px;
  } */
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const Peragraph = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #5f5e79;
  margin-bottom: 20px;
  text-align: left;
  font-weight: 400;
  letter-spacing: 1px;
  @media screen and (max-width: 1600px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1199px) {
    font-size: 15px;
    line-height: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
  &.contact-pera {
    font-weight: 400;
    color: #fff;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  @media screen and (max-width: 1199px) {
    margin-top: 10px;
  }
`;

export const CustomButton = styled.a`
  border: 1px solid #fff;
  color: #fff;
  background: none;
  outline: none;
  border-radius: 30px;
  padding: 8px 25px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s all;
  @media screen and (max-width: 1440px) {
    font-size: 16px;
    padding: 5px 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
  &:not(:last-child) {
    margin-right: 30px;
    @media screen and (max-width: 1199px) {
      margin-right: 20px;
    }
  }
  &.filled {
    border: 1px solid #fff;
    background: #fff;
    color: #4275fa;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);
    &:hover {
      background: none;
      color: #fff;
      box-shadow: none;
    }
  }
  &:hover {
    background: #fff;
    color: #4275fa;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);
  }
  &.view-btn {
    background: #4175fa;
    border-color: #4175fa;
    color: #fff;
    font-weight: 500;
    text-transform: capitalize;
    display: flex;
    width: fit-content;
    justify-content: center;
    margin: 30px auto 0;
    @media screen and (max-width: 767px) {
      margin: 20px auto 0;
    }
    &:hover {
      background: none;
      color: #4275fa;
      border-color: #fff;
    }
  }
  &.cv {
    margin: 20px 0 0 auto;
    background: #4175fa;
    border: none;
    &:hover {
      background: none;
    }
  }
`;

export default GlobalStyle;
