import styled from "styled-components";

export const AboutSectionWrapper = styled.div`
  display: flex;
  padding: 0 0 70px;
  @media screen and (max-width: 1600px) {
    padding: 0 0 60px;
  }
  @media screen and (max-width: 1440px) {
    padding: 0 0 50px;
  }
  @media screen and (max-width: 1199px) {
    padding: 0 0 40px;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
  .container {
    @media screen and (max-width: 767px) {
      flex-direction: column-reverse;
    }
  }
`;
export const AboutLeft = styled.div`
  width: auto;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
    display: flex;
  }
`;
export const AboutRight = styled.div`
  max-width: 450px;
  width: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1440px) {
    max-width: 380px;
  }
  @media screen and (max-width: 1199px) {
    max-width: 400px;
    margin-left: 20px;
  }
  @media screen and (max-width: 991px) {
    max-width: 350px;
    margin-left: 15px;
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
  .hobby-list-wrapper {
    margin-top: 60px;
    @media screen and (max-width: 1600px) {
      margin-top: 40px;
    }
    @media screen and (max-width: 1199px) {
      margin-top: 30px;
    }
    @media screen and (max-width: 767px) {
      margin-top: 10px;
      margin-bottom: 15px;
    }
  }
  p,
  .title {
    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }
`;

export const AboutImg = styled.img`
  max-width: 850px;
  width: 100%;
  float: left;
  @media screen and (max-width: 1600px) {
    max-width: 750px;
  }
  @media screen and (max-width: 767px) {
    max-width: 550px;
    margin: 0 auto;
  }
`;

export const HobbyList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;
export const HobbyItem = styled.li`
  color: #5f5e79;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media screen and (max-width: 1600px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1199px) {
    font-size: 15px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const HobbyIcon = styled.i`
  font-size: 25px;
  margin-right: 10px;
`;
