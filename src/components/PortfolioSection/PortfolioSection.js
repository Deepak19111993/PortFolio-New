import React, { useState, useEffect } from "react";
import {
  CustomButton,
  Title,
  TopTitle,
} from "../../assets/styles/Global.styles";
import {
  PortfolioInnerWrapper,
  PortfolioWrapper,
  TabList,
  TabPaneContent,
} from "./PortfolioSection.styles";
// import { Tabs } from "antd";
import ProjectStructure from "../ProjectStructure/ProjectStructure";
import { useLocation } from "react-router";
import portfolioDataList from "../portfolioDataList";
// import portfolioImg1 from "../../assets/images/portfolio1.png";
// import portfolioImg2 from "../../assets/images/portfolio2.png";
// import portfolioImg3 from "../../assets/images/portfolio3.png";
// import portfolioImg4 from "../../assets/images/portfolio4.png";
// const { TabPane } = Tabs;

// function callback(key) {
//   console.log(key);
// }

// const portfolioDataList = [
//   {
//     id: 1,
//     imageGet: portfolioImg1,
//     alt: "image1",
//     title: "Html",
//     class: "first",
//     category: "html",
//   },
//   {
//     id: 2,
//     imageGet: portfolioImg2,
//     alt: "image2",
//     title: "Html",
//     class: "second",
//     category: "html",
//   },
//   {
//     id: 3,
//     imageGet: portfolioImg3,
//     alt: "image3",
//     title: "Html",
//     class: "third",
//     category: "html",
//   },
//   {
//     id: 4,
//     imageGet: portfolioImg4,
//     alt: "image4",
//     title: "React Js",
//     class: "fourth",
//     category: "react",
//   },
//   {
//     id: 5,
//     imageGet: portfolioImg1,
//     alt: "image5",
//     title: "Bootstrap",
//     class: "fifth",
//     category: "bootstrap",
//   },
//   {
//     id: 6,
//     imageGet: portfolioImg2,
//     alt: "image6",
//     title: "Html",
//     class: "",
//     category: "html",
//   },
//   {
//     id: 7,
//     imageGet: portfolioImg3,
//     alt: "image7",
//     title: "React Js",
//     class: "",
//     category: "react",
//   },
//   {
//     id: 8,
//     imageGet: portfolioImg4,
//     alt: "image8",
//     title: "Html",
//     class: "",
//     category: "html",
//   },
//   {
//     id: 9,
//     imageGet: portfolioImg1,
//     alt: "image9",
//     title: "React Js",
//     class: "",
//     category: "react",
//   },
//   {
//     id: 10,
//     imageGet: portfolioImg2,
//     alt: "image10",
//     title: "React Js",
//     class: "",
//     category: "react",
//   },
// ];

const PortfolioSection = () => {
  const location = useLocation();
  const [isActive, setActive] = useState("");

  const [data, setData] = useState(portfolioDataList);

  const fiveList = location.pathname === "/portfolio" ? data : data.slice(0, 5);

  const filterItem = (cateItem, e) => {
    const updateCateItem = portfolioDataList.filter((curItem) => {
      return curItem.category === cateItem;
    });
    setData(updateCateItem);
  };

  const handleClick = (e) => {
    // console.log(e.target.id);
    setActive(e);
  };

  // console.log(filterItem(data));

  return (
    <PortfolioWrapper>
      <div className="container">
        <TopTitle style={{ textAlign: "center" }}>MY PORTFOLIO</TopTitle>
        <Title className="title" style={{ textAlign: "center" }}>
          Recent Works
        </Title>
        <PortfolioInnerWrapper>
          <TabList>
            <button
              id="all"
              className={isActive === "" ? "active btn" : "btn"}
              onClick={(e) => {
                setData(portfolioDataList);
                handleClick("");
              }}
            >
              All
            </button>
            <button
              id="html"
              className={isActive === "html" ? "active btn" : "btn"}
              onClick={(e) => {
                filterItem("html");
                handleClick("html");
              }}
            >
              Html/Css/Sass
            </button>
            <button
              id="react"
              className={isActive === "react" ? "active btn" : "btn"}
              onClick={(e) => {
                filterItem("react");
                handleClick("react");
              }}
            >
              React
            </button>
            <button
              id="bootstrap"
              className={isActive === "bootstrap" ? "active btn" : "btn"}
              onClick={(e) => {
                filterItem("bootstrap");
                handleClick("bootstrap");
              }}
            >
              Bootstrap
            </button>
          </TabList>
          <TabPaneContent>
            <ProjectStructure fiveList={fiveList} data={data} />
          </TabPaneContent>

          {location.pathname === "/portfolio" ? (
            ""
          ) : (
            <CustomButton href="/portfolio" className="view-btn">
              View All
            </CustomButton>
          )}
        </PortfolioInnerWrapper>
      </div>
    </PortfolioWrapper>
  );
};

export default PortfolioSection;
