import React, { useState } from "react";
import Slider from "react-slick";
import { ProjectItem } from "../ProjectStructure/ProjectStructure.styles";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const OwlSlider = ({ data }) => {
  const location = useLocation();
  const [heartActiveId, setHeartActiveId] = useState([]);

  const listLength = data.length;

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {/* <div className="item"></div> */}
        {data.map((item, index) => {
          return (
            <div className="item">
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
                  </div>
                </div>
              </ProjectItem>
            </div>
          );
        })}
        {/* <div className="item">
          <h3 style={{ background: "#000", color: "#fff" }}>2</h3>
        </div>
        <div className="item">
          <h3 style={{ background: "#000", color: "#fff" }}>3</h3>
        </div>
        <div className="item">
          <h3 style={{ background: "#000", color: "#fff" }}>4</h3>
        </div>
        <div className="item">
          <h3 style={{ background: "#000", color: "#fff" }}>5</h3>
        </div>
        <div className="item">
          <h3 style={{ background: "#000", color: "#fff" }}>6</h3>
        </div> */}
      </Slider>
    </div>
  );
};

export default OwlSlider;
