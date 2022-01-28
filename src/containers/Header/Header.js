import React, { useEffect, useState } from "react";
import { HeaderLogo, HeaderWrapper } from "./Header.styles";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Routes,
  NavLink,
} from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Home from "../Home/Home";
import logo from "../../assets/images/deepak.png";
// import logo from "../../assets/images/deepak.png";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  // const handleClick = (e) => {
  //   setMenuItem(e.key);
  //   console.log(menuItem);
  // };

  const [openLink, setOpenLink] = useState(false);

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  // const bodyClick = () => {
  //   const bodyWrap = document.getElementsByTagName("body");
  //   console.log("click", bodyWrap);
  //   openLink === true
  //     ? bodyWrap.classList.add("overflow")
  //     : bodyWrap.classList.remove("overflow");
  // };

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <HeaderWrapper
      className={
        location.pathname === "/portfolio" || location.pathname === "/getcv"
          ? "header portfolio-header"
          : "header"
      }
    >
      <div className="container">
        <Link to="/">
          <HeaderLogo src={logo} alt="logo" />
        </Link>
        <div className="navbar" id={openLink ? "open" : ""}>
          <ul className="nav" id={openLink ? "hidden" : ""}>
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={() => setOpenLink(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                className="nav-link"
                onClick={() => setOpenLink(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/portfolio"
                className="nav-link"
                onClick={() => setOpenLink(false)}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                className="nav-link"
                onClick={() => setOpenLink(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <span
            className={openLink ? "toggle-btn show" : "toggle-btn"}
            onClick={() => {
              setOpenLink(!openLink);
              // bodyClick();
            }}
          ></span>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
