import React from "react";
import {
  AboutSectionWrapper,
  AboutLeft,
  AboutRight,
  AboutImg,
  HobbyList,
  HobbyItem,
  HobbyIcon,
} from "./AboutSection.styles";
import aboutImg from "../../assets/images/about-img.png";
import {
  Peragraph,
  SubTitle,
  Title,
  TopTitle,
} from "../../assets/styles/Global.styles";

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <div className="container">
        <AboutLeft>
          <AboutImg src={aboutImg} alt="aboutImg" />
        </AboutLeft>
        <AboutRight>
          <TopTitle>ABOUT ME</TopTitle>
          <Title className="title">Html Developer / Front End Developer</Title>
          <Peragraph>
            My name is Deepak Singh,tortor posuere ac ut consequat semper
            viverra nam libero justo laoreet sit amet cursus
          </Peragraph>
          <Peragraph>
            My name is Deepak Singh,tortor posuere ac ut consequat semper
            viverra nam libero justo laoreet sit amet cursus
          </Peragraph>
          <div className="hobby-list-wrapper">
            <SubTitle>My Hobby</SubTitle>
            <HobbyList>
              <HobbyItem>
                <HobbyIcon className="icon-movie"></HobbyIcon> Movie
              </HobbyItem>
              <HobbyItem>
                <HobbyIcon className="icon-travel"></HobbyIcon>Travel
              </HobbyItem>
              <HobbyItem>
                <HobbyIcon className="icon-camera"></HobbyIcon>Photo
              </HobbyItem>
            </HobbyList>
          </div>
        </AboutRight>
      </div>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
