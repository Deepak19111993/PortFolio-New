import styled from "styled-components";

export const BannerWrapper = styled.div`
  padding-bottom: 0;
  position: relative;
  z-index: 10;
  z-index: 1;
  @media screen and (max-width: 1600px) {
    padding-bottom: 0;
  }
  @media screen and (max-width: 1440px) {
    padding-bottom: 0;
  }
  @media screen and (max-width: 1199px) {
    padding-bottom: 0;
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 0;
  }
  @media screen and (max-width: 575px) {
    padding-bottom: 0;
  }
  /* @media screen and (max-width: 480px) {
    padding-bottom: 10%;
  } */
`;

export const BannerInner = styled.div`
  /* position: absolute; */
  width: 100%;
  /* padding: 0 200px; */
  height: 100%;
  left: 50%;
  max-width: 1230px;
  padding: 0;
  /* transform: translateX(-50%); */
  @media screen and (max-width: 1440px) {
    /* padding: 0; */
  }
  @media screen and (max-width: 1199px) {
    /* padding: 0 15px; */
  }
  @media screen and (max-width: 767px) {
    position: unset;
    display: flex;
    flex-direction: column-reverse;
    transform: none;
  }
`;

export const BannerLeft = styled.div`
  color: #fff;
  float: left;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  text-align: left;
  padding-top: 8%;
  @media screen and (max-width: 1199px) {
    justify-content: start;
    padding-top: 8%;
  }
  @media screen and (max-width: 991px) {
    /* justify-content: start; */
    padding-top: 7%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
    padding-bottom: 8%;
  }
`;
export const BannerRight = styled.div`
  color: #fff;
  float: right;
  width: 50%;
  height: 100%;
  position: relative;
  margin-top: 50px;
  @media screen and (max-width: 1600px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 1440px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 991px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 30px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const BannerTitleName = styled.div`
  text-transform: uppercase;
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  @media screen and (max-width: 1440px) {
    font-size: 22px;
    line-height: 20px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1199px) {
    font-size: 20px;
    line-height: 18px;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const Designation = styled.div`
  text-transform: uppercase;
  font-size: 45px;
  line-height: 45px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: capitalize;
  @media screen and (max-width: 1440px) {
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1199px) {
    font-size: 28px;
    line-height: 28px;
  }
  @media screen and (max-width: 991px) {
    font-size: 25px;
    line-height: 25px;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const BannerPera = styled.div`
  /* color: #fff; */
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 20px;
  @media screen and (max-width: 1440px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const BannerImg = styled.img`
  /* position: absolute; */
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 100%;
  width: 100%;
  padding-left: 20px;
  margin-right: -20px;
  margin-bottom: -40px;
  animation: float 6s ease-in-out infinite;
  @media screen and (max-width: 1440px) {
    max-width: 95%;
    margin-right: -15px;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: -32px;
    max-width: 100%;
  }
  @media screen and (max-width: 767px) {
    position: unset;
    max-width: 65%;
    margin-right: 0;
    padding-left: 0;
    margin-bottom: 0;
  }
  @media screen and (max-width: 575px) {
    max-width: 75%;
  }
  @media screen and (max-width: 480px) {
    max-width: 80%;
  }
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;
