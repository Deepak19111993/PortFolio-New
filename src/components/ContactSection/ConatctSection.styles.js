import styled from "styled-components";

export const ContactWrapper = styled.div`
  .container {
    flex-direction: column;
  }
`;
export const ConatctFormWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  /* margin-left: calc(50% - 1230px);
  margin-right: calc(50% - 1230px); */
  position: relative;
  /* margin-left: -200px;
  margin-right: -200px; */
  @media screen and (max-width: 1199px) {
    margin-top: 30px;
    /* margin-left: -15px;
    margin-right: -15px; */
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 575px) {
    margin-left: 0;
    margin-right: 0;
    flex-direction: column;
  }
  /* @media screen and (max-width: 767px) {
    margin-left: -15px;
    margin-right: -15px;
  } */
  .contact-detail {
    margin: 25px 0 0;
    padding: 0;
    list-style-type: none;
    text-align: left;
    @media screen and (max-width: 767px) {
      margin: 20px 0 0;
    }
    li {
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      display: flex;
      align-items: center;
      @media screen and (max-width: 1600px) {
        font-size: 16px;
      }
      @media screen and (max-width: 991px) {
        font-size: 15px;
      }
      @media screen and (max-width: 767px) {
        font-size: 14px;
      }
      &:not(:last-child) {
        margin: 0 0 20px;
        @media screen and (max-width: 1600px) {
          margin: 0 0 15px;
        }
        @media screen and (max-width: 767px) {
          margin: 0 0 10px;
        }
      }
      .icon {
        margin-right: 15px;
        font-size: 20px;
        @media screen and (max-width: 575px) {
          font-size: 18px;
          margin-right: 10px;
        }
      }
      a {
        color: #fff;
      }
    }
  }
  .social-media {
    margin: 60px 0 0;
    padding: 0;
    display: flex;
    align-items: center;
    list-style-type: none;
    @media screen and (max-width: 1600px) {
      margin: 40px 0 0;
    }
    @media screen and (max-width: 991px) {
      margin: 30px 0 0;
    }
    @media screen and (max-width: 575px) {
      margin: 20px 0 0;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      &:not(:last-child) {
        margin: 0 20px 0 0;
        @media screen and (max-width: 575px) {
          margin: 0 15px 0 0;
        }
      }
      a {
        display: flex;
        padding: 15px;
        border-radius: 50%;
        transition: 0.4s all;
        @media screen and (max-width: 991px) {
          padding: 12px;
        }
        @media screen and (max-width: 767px) {
          padding: 10px;
        }
        .icon {
          font-size: 30px;
          @media screen and (max-width: 991px) {
            font-size: 25px;
          }
          @media screen and (max-width: 767px) {
            font-size: 25px;
          }
          @media screen and (max-width: 575px) {
            font-size: 22px;
          }
        }
      }
      &:hover {
        a {
          background: #4275fa;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);
        }
      }
    }
  }
  .ant-form {
    &.conatct-form {
      .ant-form-item {
        text-align: left;
        margin-bottom: 0;
        &:not(:last-child) {
          margin-bottom: 20px;
          @media screen and (max-width: 1199px) {
            margin-bottom: 15px;
          }
        }
        button {
          float: left;
          color: #fff;
          height: 40px;
          line-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 30px;
          background: #4275fa;
          font-size: 18px;
          font-weight: 500;
          padding: 0 20px;
          border: none;
          margin-top: 5px;
          @media screen and (max-width: 1440px) {
            font-size: 16px;
            padding: 0 20px;
          }
          @media screen and (max-width: 767px) {
            font-size: 14px;
            height: 35px;
            line-height: 35px;
          }
          &:hover {
            background: #fff;
            color: #4275fa;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);
          }
        }
        .ant-form-item-control {
          .ant-form-item-control-input {
            .ant-input {
              padding: 4px 5px;
              border-top: 0;
              border-left: 0;
              border-right: 0;
              font-size: 18px;
              border-radius: 0;
              @media screen and (max-width: 1600px) {
                font-size: 16px;
              }
              @media screen and (max-width: 1199px) {
                font-size: 14px;
              }
              @media screen and (max-width: 575px) {
                padding: 4px 0;
              }
              &:focus {
                box-shadow: none;
              }
            }
          }
        }
        .ant-form-item-label {
          padding: 0 0 5px;
          @media screen and (max-width: 575px) {
            padding: 0;
          }
          label {
            font-size: 18px;
            font-weight: 500;
            @media screen and (max-width: 1600px) {
              font-size: 16px;
            }
            @media screen and (max-width: 767px) {
              font-size: 15px;
            }
            @media screen and (max-width: 575px) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;
export const ConatctFormLeft = styled.div`
  width: 49%;
  background: #294ba1 url("../../assets/images/eclipse.png") no-repeat;
  padding: 30px 30px 30px 0;
  border-radius: 0 10px 10px 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 10%;
    background: #294ba1;
    width: -webkit-fill-available;
    width: -moz-available;
    margin-left: -80vw;
    z-index: -1;
    border-radius: 0 10px 10px 0;
  }
  @media screen and (max-width: 1199px) {
    padding: 30px 15px 30px 0;
  }
  @media screen and (max-width: 767px) {
    padding: 20px 15px 20px 0;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 15px;
  }
`;
export const ConatctFormRight = styled.div`
  width: calc(51% - 40px);
  margin-left: 40px;
  padding: 20px 0 0 0;
  max-width: 590px;
  @media screen and (max-width: 1199px) {
    padding: 15px 0 0 0;
  }
  @media screen and (max-width: 1199px) {
    width: calc(51% - 20px);
    margin-left: 20px;
  }
  @media screen and (max-width: 767px) {
    width: calc(51% - 15px);
    margin-left: 15px;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    margin-left: 0;
    padding: 20px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 15px 0 0 0;
  }
`;
