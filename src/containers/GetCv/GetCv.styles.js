import styled from "styled-components";
export const GetCvWrapper = styled.div``;
export const GetCvBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  .block {
    padding: 30px;
    color: #979797;
    @media screen and (max-width: 767px) {
      width: 100% !important;
      padding: 20px 10px;
    }
    @media screen and (max-width: 767px) {
      padding-bottom: 20px;
    }
    &:first-child,
    &:nth-child(3) {
      width: 40%;
    }
    &:nth-child(2),
    &:nth-child(4) {
      width: 60%;
    }
    &:nth-child(2),
    &:nth-child(3) {
      background: #293ae0;
      color: #fff;
    }
    &:first-child {
      padding: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 991px) {
        padding: 20px;
      }
    }
    &:nth-child(3) {
      padding-top: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (max-width: 767px) {
        padding-top: 0;
      }
    }
    &:nth-child(2) {
      @media screen and (max-width: 767px) {
        padding-top: 60px;
      }
      @media screen and (max-width: 575px) {
        padding-top: 50px;
      }
    }
    &:nth-child(4) {
      @media screen and (max-width: 575px) {
        padding: 20px 0;
      }
    }
    h1 {
      color: #fff;
      font-size: 45px;
      line-height: 55px;
      text-align: left;
      text-transform: uppercase;
      margin-bottom: 15px;
      @media screen and (max-width: 991px) {
        font-size: 35px;
        line-height: 45px;
      }
      @media screen and (max-width: 767px) {
        font-size: 30px;
        line-height: 40px;
        margin-bottom: 10px;
      }
      @media screen and (max-width: 575px) {
        font-size: 26px;
        line-height: 36px;
      }
    }
    h2 {
      color: #fff;
      text-transform: uppercase;
      text-align: left;
      font-size: 24px;
      line-height: 28px;
      @media screen and (max-width: 991px) {
        font-size: 22px;
        line-height: 26px;
      }
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 24px;
      }
      @media screen and (max-width: 575px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    p {
      text-align: left;
      font-size: 15px;
      line-height: 22px;
      letter-spacing: 0.5px;
      @media screen and (max-width: 991px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
    hr {
      margin: 20px 0;
      border-bottom: 1px solid;
      border-top: 0;
      @media screen and (max-width: 991px) {
        margin: 15px 0;
      }
    }
    .cv-title {
      font-size: 26px;
      line-height: 30px;
      color: #666;
      border-bottom: 1px solid;
      padding-bottom: 5px;
      margin-bottom: 30px;
      @media screen and (max-width: 991px) {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 20px;
      }
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 15px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    .cv-current-work {
      color: #999;
      text-align: left;
      display: block;
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 20px;
      @media screen and (max-width: 991px) {
        font-size: 16px;
        line-height: 18px;
        margin-bottom: 15px;
      }
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 16px;
      }
    }
    .subtitle {
      color: #666;
      font-weight: 500;
      text-align: left;
      display: block;
      text-transform: uppercase;
      font-size: 22px;
      line-height: 26px;
      @media screen and (max-width: 991px) {
        font-size: 20px;
        line-height: 24px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    .company-title {
      font-size: 18px;
      line-height: 22px;
      text-align: left;
      display: block;
      color: #666;
      font-weight: 400;
      @media screen and (max-width: 991px) {
        font-size: 16px;
        line-height: 18px;
      }
      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
    .work-ex {
      margin-bottom: 50px;
      @media screen and (max-width: 991px) {
        margin-bottom: 30px;
      }
      @media screen and (max-width: 767px) {
        margin-bottom: 20px;
      }
      ul {
        margin: 20px 0 0;
        @media screen and (max-width: 991px) {
          margin: 15px 0 0;
        }
        @media screen and (max-width: 575px) {
          padding-left: 30px;
        }
        /* padding: 0; */
        li {
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 10px;
          padding: 0;
          text-align: left;
          color: #666;
          @media screen and (max-width: 991px) {
            font-size: 14px;
            line-height: 18px;
            margin-bottom: 8px;
          }
        }
      }
      .learn-range {
        .learn-block {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          > span {
            font-size: 16px;
            margin-right: 15px;
            color: #666;
            font-weight: 600;
            min-width: 80px;
            text-align: left;
            @media screen and (max-width: 991px) {
              font-size: 14px;
            }
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    .contact {
      margin: 20px 0 40px;
      padding: 0;
      @media screen and (max-width: 991px) {
        margin: 10px 0 20px;
      }
      @media screen and (max-width: 575px) {
        margin: 0 0 10px;
      }
      li {
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 20px;
        color: #fff;
        text-align: left;
        @media screen and (max-width: 991px) {
          font-size: 14px;
          line-height: 18px;
          margin-bottom: 20px;
        }
        @media screen and (max-width: 767px) {
          margin-bottom: 15px;
        }
        a {
          color: #fff;
        }
        .icon {
          margin-right: 20px;
          font-size: 25px;
          @media screen and (max-width: 991px) {
            font-size: 20px;
            margin-right: 15px;
          }
          &::before {
            color: #fff;
          }
        }
      }
    }
  }
`;

export const CvAvatar = styled.div`
  /* width: 250px;
  height: 250px; */
  padding: 50%;
  margin: 0 auto -100px;
  position: relative;
  @media screen and (max-width: 991px) {
    padding: 45%;
  }
  @media screen and (max-width: 767px) {
    padding: 0;
    margin: 0 auto -50px;
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 575px) {
    width: 150px;
    height: 150px;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* border-radius: 5px; */
    border: 5px solid #fff;
    @media screen and (max-width: 575px) {
      border-radius: 50%;
      border: 3px solid #fff;
    }
  }
`;
