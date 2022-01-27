import styled from "styled-components";
export const FooterWrapper = styled.div`
  clear: both;
  background: rgb(2, 0, 36);
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
  padding: 34px 0;
  color: #fff;
  @media screen and (max-width: 1600px) {
    padding: 20px 0;
  }
  @media screen and (max-width: 767px) {
    padding: 15px 15px;
  }
  .footer-logo {
    margin-bottom: 15px;
    width: 150px;
    @media screen and (max-width: 1600px) {
      width: 150px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 1199px) {
      width: 120px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 991px) {
      width: 100px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 575px) {
      margin-bottom: 5px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0;
    @media screen and (max-width: 1600px) {
      font-size: 15px;
    }
    @media screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
`;
