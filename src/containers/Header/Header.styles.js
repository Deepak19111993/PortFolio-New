import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 80px;
  /* display: flex;
  align-items: center; */
  /* background: #f1f1f1; */
  /* padding: 0 200px; */
  transition: 0.2s all;
  @media screen and (max-width: 1440px) {
    height: 70px;
    padding: 0 0;
  }
  @media screen and (max-width: 1199px) {
    padding: 0 0;
  }
  @media screen and (max-width: 991px) {
    height: 60px;
    padding: 10px 0;
  }
  .navbar {
    float: right;
    position: relative;
    .nav {
      float: right;
      list-style-type: none;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      line-height: 80px;
      /* transition: 0.2s all; */
      @media screen and (max-width: 1440px) {
        line-height: 70px;
      }
      @media screen and (max-width: 991px) {
        line-height: 50px;
      }
      li {
        margin: 0;
        padding: 0;
        &:not(:last-child) {
          margin: 0 20px 0 0;
        }
        a {
          color: #fff;
          display: block;
          position: relative;
          font-size: 16px;
          font-weight: 500;
          @media screen and (max-width: 767px) {
            font-size: 15px;
          }
          &.active {
            &::before {
              content: "";
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 4px;
              border-radius: 100px 100px 0 0;
              background: #fff;
              @media screen and (max-width: 767px) {
                height: 3px;
              }
            }
          }
        }
      }
      @media screen and (max-width: 600px) {
        /* display: none; */
        /* height: 0; */
        visibility: hidden;
        width: 0;
        height: 0;
        transform: translateX(-20px);
        overflow: hidden;
      }
      &#hidden {
        display: flex;

        @media screen and (max-width: 600px) {
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          /* height: calc(100vh - 60px); */
          height: auto;
          color: #fff;
          display: flex;
          flex-direction: column;
          background: #0100c7;
          z-index: 999;
          visibility: visible;
          overflow: visible;
          transform: translateX(0);
          transition: 0.2s all;
          padding: 20px 15px;
          padding-top: 60px !important;
          li {
            margin-right: 0;
            a {
              &:before {
                display: none;
              }
            }
          }
        }
      }
    }
    .toggle-btn {
      line-height: 50px;
      display: none;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 40px;
      cursor: pointer;
      position: relative;
      z-index: 1000;
      @media screen and (max-width: 600px) {
        display: flex;
      }
      &:before {
        content: "";
        width: 22px;
        height: 2px;
        background: #fff;
        margin-bottom: 5px;
        transition: 0.2s all;
      }
      &:after {
        content: "";
        width: 22px;
        height: 2px;
        background: #fff;
        transition: 0.2s all;
      }
      &.show {
        float: right;
        right: 15px;
        top: 10px;
        &:before {
          transform: rotate(45deg);
          margin-bottom: -2px;
        }
        &:after {
          transform: rotate(-45deg);
          margin-bottom: -5px;
        }
      }
    }
    &#open {
      @media screen and (max-width: 600px) {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        background: rgba(0, 0, 0, 50%);
        z-index: 2;
      }
    }
  }
  &.header {
    /* transform: translateY(0); */
  }
  &.is-sticky {
    position: fixed;
    top: 10px;
    width: 100%;
    z-index: 1000;
    background: rgb(2, 0, 36);
    transition: 0.4s all;
    transform: translateY(-10px);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(66, 117, 250, 1) 0%,
      rgba(33, 64, 158, 1) 0%,
      rgba(33, 66, 159, 1) 0%,
      rgba(46, 36, 207, 1) 0%,
      rgba(153, 35, 178, 1) 0%,
      rgba(66, 117, 250, 1) 0%,
      rgba(17, 2, 198, 1) 100%,
      rgba(30, 187, 228, 1) 100%,
      rgba(67, 196, 78, 1) 100%,
      rgba(203, 35, 165, 1) 100%,
      rgba(106, 94, 226, 1) 100%,
      rgba(121, 109, 231, 1) 100%,
      rgba(21, 120, 195, 1) 100%,
      rgba(23, 156, 219, 1) 100%,
      rgba(8, 175, 231, 1) 100%
    );
  }
  &.portfolio-header {
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(66, 117, 250, 1) 0%,
      rgba(33, 64, 158, 1) 0%,
      rgba(33, 66, 159, 1) 0%,
      rgba(46, 36, 207, 1) 0%,
      rgba(153, 35, 178, 1) 0%,
      rgba(66, 117, 250, 1) 0%,
      rgba(17, 2, 198, 1) 100%,
      rgba(30, 187, 228, 1) 100%,
      rgba(67, 196, 78, 1) 100%,
      rgba(203, 35, 165, 1) 100%,
      rgba(106, 94, 226, 1) 100%,
      rgba(121, 109, 231, 1) 100%,
      rgba(21, 120, 195, 1) 100%,
      rgba(23, 156, 219, 1) 100%,
      rgba(8, 175, 231, 1) 100%
    );
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderLogo = styled.img`
  float: left;
  height: 100%;
  width: 130px;
  object-fit: contain;
  position: relative;
  z-index: 1000;
  @media screen and (max-width: 1440px) {
    width: 120px;
  }
  @media screen and (max-width: 991px) {
    width: 100px;
  }
  @media screen and (max-width: 767px) {
    width: 80px;
  }
`;
