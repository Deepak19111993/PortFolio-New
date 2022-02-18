import React, { useEffect } from "react";
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
import gsap from "gsap";

const Content = ({ scrollRef }) => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    gsap.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 0.5 });
    let t1 = gsap.timeline();

    t1
      // .from(".banner-body", {
      //   duration: 1,
      //   scaleY: 0,
      //   transformOrigin: "top",
      //   ease: "expo.out",
      // })
      .to(".dk", {
        // scaleY: 0,
        transformOrigin: "bottom",
        ease: "expo.In",
      })
      .from(".banner-left", {
        duration: 1,
        ease: "Power2.easeInOut",
        stagger: 1,
      })
      .from(".banner-left div", {
        duration: 1,
        opacity: 0,
        delay: -2,
        y: 50,
        ease: "Power2.easeInOut",
        stagger: {
          amount: 1,
          each: 1,
        },
      });
    // .from([".about-left", ".about-left img"], {
    //   duration: 2,
    //   opacity: 0,
    //   delay: -1,
    //   y: 50,
    //   ease: "expo.out",
    //   stagger: {
    //     amount: 0.3,
    //   },
    // })
    // .to(".about-left", {
    //   duration: 2,
    //   opacity: 1,
    // })
    // .from(
    //   [
    //     ".about-text div",
    //     ".about-text h2",
    //     ".about-text p",
    //     "about-text .hobby-list-wrapper",
    //   ],
    //   {
    //     duration: 2,
    //     opacity: 0,
    //     delay: -3,
    //     y: 50,
    //     ease: "expo.out",
    //     stagger: {
    //       amount: 0.3,
    //     },
    //   }
    // )
    // .from(".skill-header-text", {
    //   duration: 2,
    //   opacity: 0,
    //   delay: -3,
    //   y: 50,
    //   ease: "expo.out",
    //   stagger: {
    //     amount: 0.3,
    //   },
    // });
  }, []);

  return (
    <>
      <HeroSection
        // data-scroll-section
        className={
          location.pathname === "/portfolio" || location.pathname === "/getcv"
            ? "port-margin"
            : "banner-body"
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
