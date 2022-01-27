import React, { useEffect, useState } from "react";
import { ProjectItem, ProjectListWrapper } from "./ProjectStructure.styles";

import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const ProjectStructure = ({ fiveList, data }) => {
  const location = useLocation();
  const [heartActiveId, setHeartActiveId] = useState([]);

  const portfolioData = fiveList.map((item, index) => {
    const listLength = fiveList.length;
    console.log(listLength);
    return (
      <>
        <ProjectItem
          className={
            location.pathname === "/portfolio"
              ? "portfolio-page item"
              : listLength === 5
              ? `item${index} item`
              : "item"
          }
          key={item.id}
        >
          <img src={item.imageGet} alt={item.alt} />
          <div className="overlay">
            <sapn>{item.title}</sapn>
            <div className="icon-wrapper">
              <Link
                to={`/portfolio/${item.id}`}
                className="icon icon-resize"
                // key={item.id}
              ></Link>
              {heartActiveId.includes(item.id) ? (
                <Link
                  to=""
                  className="icon fill-heart icon-Vector"
                  onClick={() => {
                    let heartAcitveVisible = [...heartActiveId];
                    const index = heartAcitveVisible.indexOf(item.id);
                    if (index > -1) {
                      heartAcitveVisible.splice(index, 1);
                      setHeartActiveId(heartAcitveVisible);
                    }
                  }}
                ></Link>
              ) : (
                <Link
                  to=""
                  className="icon  icon-heart"
                  onClick={() => {
                    setHeartActiveId([...heartActiveId, item.id]);
                    // heartId(itemId);
                  }}
                ></Link>
              )}
              {/* <Link to="" className="icon icon-heart"></Link>
              <Link to="" className="icon-Vector"></Link> */}
            </div>
          </div>
        </ProjectItem>
      </>
    );
  });

  return <ProjectListWrapper>{portfolioData}</ProjectListWrapper>;
};

export default ProjectStructure;
