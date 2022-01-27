import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import SkillSection from "../../components/SkillSection/SkillSection";
import About from "../About/About";
import { HomeWrapper } from "./Home.styles";

const Home = () => {
  return (
    <HomeWrapper>
      <AboutSection />
      <SkillSection />
      <PortfolioSection />
      <ContactSection />
    </HomeWrapper>
  );
};

export default Home;
