import React from "react";
import { Peragraph, SubTitle } from "../../assets/styles/Global.styles";
import { SkillCard, SkillCardItem } from "./SkillCardList.styles";
import skillImage1 from "../../assets/images/skill1.png";
import skillImage2 from "../../assets/images/skill2.png";
import skillImage3 from "../../assets/images/skill3.png";
import skillImage4 from "../../assets/images/skill4.png";
import skillImage5 from "../../assets/images/skill5.png";
import skillImage6 from "../../assets/images/skill6.png";

const cardList = [
  {
    id: 1,
    image: skillImage1,
    title: "Html",
    peragraph:
      "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  },
  {
    id: 2,
    image: skillImage2,
    title: "Css",
    peragraph:
      "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  },
  {
    id: 3,
    image: skillImage3,
    title: "Sass",
    peragraph:
      "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  },
  {
    id: 4,
    image: skillImage4,
    title: "Bootstrap",
    peragraph:
      "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  },
  {
    id: 5,
    image: skillImage5,
    title: "React 50%",
    peragraph:
      "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  },
  {
    id: 6,
    image: skillImage6,
    title: "Style Components",
    peragraph:
      "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  },
];

const cardListItem = cardList.map((item, id, index) => (
  <SkillCardItem key={id} className={`item${id}`}>
    <img src={item.image} alt="images" />
    <SubTitle className="subtitle">{item.title}</SubTitle>
    <Peragraph>{item.peragraph}</Peragraph>
  </SkillCardItem>
));

const SkillCardList = () => {
  return <SkillCard>{cardListItem}</SkillCard>;
};

export default SkillCardList;
