import React from "react";
import { Title, TopTitle } from "../../assets/styles/Global.styles";
import SkillCardList from "../SkillCardList/SkillCardList";
import {
  SkillCardListWrapper,
  SkillSectionWrapper,
} from "./SkillSection.styles";

const SkillSection = () => {
  return (
    <SkillSectionWrapper>
      <div className="container">
        <TopTitle style={{ textAlign: "center" }}>WHAT I DO</TopTitle>
        <Title className="title" style={{ textAlign: "center" }}>
          Specializing In
        </Title>
        <SkillCardListWrapper>
          <SkillCardList />
        </SkillCardListWrapper>
      </div>
    </SkillSectionWrapper>
  );
};

export default SkillSection;
