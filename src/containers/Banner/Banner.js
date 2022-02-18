import React, { useEffect } from "react";
import {
  BtnWrapper,
  CustomButton,
  FadeInLeft,
} from "../../assets/styles/Global.styles";
import {
  BannerImg,
  BannerInner,
  BannerLeft,
  BannerPera,
  BannerRight,
  BannerTitleName,
  BannerWrapper,
  Designation,
} from "./Banner.styles";
import bannerImg from "../../assets/images/banner-img.png";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
// import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.min.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const Banner = () => {
  const location = useLocation();
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    const words = ["Html Developer", "As A Front End Developer"];
    var masterText = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      masterText.to(".heading-designation", {
        repeat: 1,
        yoyo: true,
        duration: 2,
        repeatDelay: 2,
        text: word,
        ease: "Power2.easeOut",
      });
    });
    return () => {
      masterText.restart();
      masterText.kill();
    };
  });

  return (
    <>
      {location.pathname === "/portfolio" || location.pathname === "/getcv" ? (
        ""
      ) : (
        <BannerWrapper
        // data-scroll-section
        >
          <div className="container">
            <BannerInner>
              {/* <ScrollAnimation animateIn="fadeIn"> */}
              <BannerLeft
                // data-aos="fade-right"
                // data-aos-mirror="true"
                // data-aos-duration="2000"
                // data-aos-once="true"
                className="banner-left"
              >
                <BannerTitleName>hello, im deepak</BannerTitleName>
                <Designation className="heading-designation">
                  {/* html developer / front end developer */}
                </Designation>
                <BannerPera>
                  Freelance Html Developer / Front End Developer based in
                  bekasi, Let’s Work Together.
                </BannerPera>
                <BtnWrapper>
                  <Link to="/contact" className="link-btn filled">
                    hire me
                  </Link>
                  {/* <Link to="/getcv" className="link-btn">
                    get cv
                  </Link> */}
                </BtnWrapper>
              </BannerLeft>
              {/* </ScrollAnimation> */}
              {/* <FadeInUp> */}
              <BannerRight
                data-aos="fade-up"
                data-aos-mirror="true"
                data-aos-duration="2000"
                data-aos-once="true"
                className="banner-right"
              >
                <BannerImg src={bannerImg} alt="" />
              </BannerRight>
              {/* </FadeInUp> */}
            </BannerInner>
          </div>
        </BannerWrapper>
      )}
    </>
  );
};

export default Banner;
