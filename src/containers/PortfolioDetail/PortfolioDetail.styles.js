import styled from "styled-components";
export const PortfolioDetailWrapper = styled.div`
  .detail-wrapper {
    display: flex;
    width: 100%;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
    .img-wrapper {
      width: 40%;
      /* height: 400px; */
      overflow: hidden;
      padding: 10%;
      position: relative;
      border-radius: 5px;
      @media screen and (max-width: 767px) {
        width: 100%;
        margin-bottom: 20px;
        padding: 25%;
      }
      .portdetail-img {
        width: 100%;
        /* height: 100%; */
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 5px;
      }
    }
    .detail-content {
      width: 60%;
      text-align: left;
      margin-left: 30px;
      @media screen and (max-width: 767px) {
        width: 100%;
        margin-left: 0;
      }
      .title {
        color: #000;
        font-size: 24px;
        line-height: 28px;
        @media screen and (max-width: 767px) {
          font-size: 22px;
          line-height: 26px;
        }
      }
      p {
        color: #979797;
        font-size: 16px;
        line-height: 24px;
        @media screen and (max-width: 767px) {
          font-size: 14px;
          line-height: 22px;
        }
      }
      .badges {
        margin-top: 20px;
        display: flex;
        .item {
          background: #4174f9;
          color: #fff;
          padding: 5px 10px;
          border-radius: 3px;
          font-size: 14px;
          text-transform: capitalize;
          font-weight: 500;
          @media screen and (max-width: 767px) {
            font-size: 13px;
            padding: 3px 8px;
          }
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
      .thumnail-images {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        @media screen and (max-width: 767px) {
          margin-top: 20px;
        }
        span {
          width: calc(25% - 8px);
          /* height: 150px; */
          margin-bottom: 10px;
          padding: 10%;
          position: relative;
          border-radius: 3px;
          overflow: hidden;
          @media screen and (max-width: 767px) {
            width: calc(25% - 4px);
          }
          @media screen and (max-width: 480px) {
            width: calc(50% - 3px);
            padding: 18%;
          }

          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            @media screen and (max-width: 767px) {
              margin-bottom: 0;
            }
          }
          &:not(:last-child) {
            margin-right: 10px;
            @media screen and (max-width: 767px) {
              margin-right: 5px;
            }
            @media screen and (max-width: 480px) {
              margin-right: 6px;
              margin-bottom: 6px;
            }
          }
          &:nth-child(even) {
            @media screen and (max-width: 480px) {
              margin-right: 0;
            }
          }
          &:nth-last-child(-n + 2) {
            @media screen and (max-width: 480px) {
              margin-bottom: 0;
            }
          }
        }
      }
      .live-link {
        text-decoration: underline;
        margin-top: 5px;
        display: block;
        font-size: 16px;
        color: #4275fa;
        background: none;
        padding: 0;
        &:hover {
          box-shadow: none;
          background: none;
        }
      }
    }
  }
`;
