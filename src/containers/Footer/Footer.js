import React from "react";
import { FooterWrapper } from "./Footer.styles";
import footerLogo from "../../assets/images/Rauliqbal.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <Link to="/">
        <img className="footer-logo" src={footerLogo} alt="footer-logo" />
      </Link>
      <p>COPYRIGHT © 2022 DESIGN BY DEEPAK</p>
    </FooterWrapper>
  );
};

export default Footer;
