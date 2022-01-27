import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  padding: 0 0 70px;
  @media screen and (max-width: 1600px) {
    padding: 0 0 60px;
  }
  @media screen and (max-width: 1440px) {
    padding: 0 0 50px;
  }
  @media screen and (max-width: 1199px) {
    padding: 0 0 40px;
  }
  .container {
    flex-direction: column;
  }
`;

export const PortfolioInnerWrapper = styled.div`
  /* @media screen and (max-width: 1440px) {
    max-width: 1080px;
    margin: 0 auto;
  } */
`;
export const TabList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
  .btn {
    border: none;
    background: none;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    @media screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media screen and (max-width: 767px) {
      font-size: 15px;
    }
    @media screen and (max-width: 575px) {
      font-size: 14px;
    }
    &:not(:last-child) {
      margin-right: 20px;
      @media screen and (max-width: 767px) {
        margin-right: 5px;
      }
    }
    &.active {
      color: #4175fa;
    }
  }
`;
export const TabPaneContent = styled.div``;
