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
import ProjectStructure from "../ProjectStructure/ProjectStructure";
import { useLocation } from "react-router";
import portfolioDataList from "../portfolioDataList";
import { Link } from "react-router-dom";

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
        <div data-aos="fade-up" data-aos-mirror="true" data-aos-duration="2000">
          <TopTitle style={{ textAlign: "center" }}>MY PORTFOLIO</TopTitle>
          <Title className="title" style={{ textAlign: "center" }}>
            Recent Works
          </Title>
        </div>
        <PortfolioInnerWrapper
          data-aos="fade-right"
          data-aos-mirror="true"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
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
            // <CustomButton href="/portfolio" className="view-btn">
            //   View All
            // </CustomButton>
            <Link to="/portfolio" className="link-btn view-btn">
              View All
            </Link>
          )}
        </PortfolioInnerWrapper>
      </div>
    </PortfolioWrapper>
  );
};

export default PortfolioSection;
