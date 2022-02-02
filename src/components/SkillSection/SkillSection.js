import React from "react";
import { Title, TopTitle } from "../../assets/styles/Global.styles";
import SkillCardList from "../SkillCardList/SkillCardList";
import {
  SkillCardListWrapper,
  SkillSectionWrapper,
} from "./SkillSection.styles";

const SkillSection = () => {
  return (
    <SkillSectionWrapper
    // data-aos="fade-up"
    // data-aos-mirror="true"
    // data-aos-duration="2000"
    >
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-mirror="true"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <TopTitle style={{ textAlign: "center" }}>WHAT I DO</TopTitle>
          <Title className="title" style={{ textAlign: "center" }}>
            Specializing In
          </Title>
        </div>
        <SkillCardListWrapper
          data-aos="fade-left"
          data-aos-mirror="true"
          data-aos-duration="2000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <SkillCardList />
        </SkillCardListWrapper>
      </div>
    </SkillSectionWrapper>
  );
};

export default SkillSection;
