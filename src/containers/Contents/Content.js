import React from "react";
import {
  Route,
  Link,
  BrowserRouter,
  Switch,
  Routes,
  NavLink,
} from "react-router-dom";
import { ContentWrapper, HeroSection } from "../../assets/styles/Global.styles";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import { useLocation } from "react-router";
import Footer from "../Footer/Footer";
import PortfolioDetail from "../PortfolioDetail/PortfolioDetail";
import GetCv from "../GetCv/GetCv";

const Content = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <HeroSection
        className={
          location.pathname === "/portfolio" || location.pathname === "/getcv"
            ? "port-margin"
            : ""
        }
      >
        <Header />
        <Banner />
      </HeroSection>

      <ContentWrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route
            exact
            path="/portfolio/:portfolioId"
            element={<PortfolioDetail />}
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/getcv" element={<GetCv />} />
        </Routes>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default Content;
