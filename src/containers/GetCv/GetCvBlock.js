import React from "react";
import { CvAvatar, GetCvBlockWrapper } from "./GetCv.styles";
import avatarImg from "../../assets/images/user.png";
import { CustomButton, Title } from "../../assets/styles/Global.styles";
import { Progress } from "antd";
import { AimOutlined } from "@ant-design/icons";
import cv from "../../assets/images/cv.png";

const GetCvBlock = () => {
  return (
    <GetCvBlockWrapper>
      <div className="block">
        <CvAvatar>
          <img src={avatarImg} alt="avatarImage" />
        </CvAvatar>
      </div>
      <div className="block">
        <h1>Deepak Kushwaha</h1>
        <h2>html developer / front end developer</h2>
        <hr />
        <p style={{ marginBottom: "0" }}>
          Hello, My Name is Deepak Kushwaha, I can Html, css and convert Pdf to
          Html, Figma to Html And I have knowledge of React Js also, I can some
          of functionality in react like hook (useState, useEffect, useRef).
        </p>
      </div>
      <div className="block">
        <Title className="cv-title" style={{ color: "#fff" }}>
          contact
        </Title>
        <ul className="contact">
          <li>
            <span className="icon icon-mail"></span>
            <a href="mailto:deepak207510@gmail.com">deepak207510@gmail.com</a>
          </li>
          <li>
            <span className="icon icon-call"></span>
            <a href="phone:+91 799035823">+91 7990335823</a>
          </li>
          <li>
            <AimOutlined className="icon" /> Ahmedabad, Gujarat - 380050
          </li>
        </ul>
        <Title className="cv-title" style={{ color: "#fff" }}>
          education
        </Title>
        <div className="work-ex">
          <span className="cv-current-work" style={{ color: "#fff" }}>
            2012
          </span>
          <span className="subtitle" style={{ color: "#fff" }}>
            High School 12th
          </span>
          <span className="company-title" style={{ color: "#fff" }}>
            Navsanskar High School
          </span>
        </div>
        <div className="work-ex">
          <span className="cv-current-work" style={{ color: "#fff" }}>
            2015
          </span>
          <span className="subtitle" style={{ color: "#fff" }}>
            html development and front end development
          </span>
          <span className="company-title" style={{ color: "#fff" }}>
            Eyecon Multimedia
          </span>
          <ul>
            <li style={{ color: "#fff" }}>
              I have completed Certified Certificate of diploma (2.5 years)
            </li>
          </ul>
        </div>
      </div>
      <div className="block">
        <Title className="cv-title">work Experiences</Title>
        <div className="work-ex">
          <span className="cv-current-work">January, 2021 - Present</span>
          <span className="subtitle">junior html developer</span>
          <span className="company-title">Creole Studio Pvt Ltd</span>
          <ul>
            <li>
              I have knowledged of Html, Css, Scss, Bootstrap and react Js(50%).
            </li>
            <li>I have created many project in this company.</li>
            <li>I have knowledged of in React Js like 50%.</li>
            <li>
              I have designed also 2 project in React Js Language from scratch
              and some Functionality.
            </li>
            <li>
              I have learned React Js and Hook(useState, useRef and useEffect)
              in this company.
            </li>
          </ul>
        </div>
        <div className="work-ex">
          <span className="cv-current-work">
            December, 2019 - December, 2020
          </span>
          <span className="subtitle">junior html developer</span>
          <span className="company-title">Fora Studio Pvt Ltd</span>
          <ul>
            <li>
              Here I learned basic structure of html and css and how to create
              design by structurable with html and css.
            </li>
          </ul>
        </div>
        <div className="work-ex">
          <span className="cv-current-work">June, 2019 - December, 2019</span>
          <span className="subtitle">junior html developer</span>
          <span className="company-title">WedoWebApps Pvt Ltd</span>
          <ul>
            <li>Here was on Traning Priod in this company.</li>
            <li>I learned here html and css.</li>
          </ul>
        </div>
        <Title className="cv-title">my skills</Title>
        <div className="work-ex">
          <div className="learn-range">
            <div className="learn-block">
              <span>Html</span>
              <Progress percent={100} />
            </div>
            <div className="learn-block">
              <span>Css</span>
              <Progress percent={100} />
            </div>
            <div className="learn-block">
              <span>Scss</span>
              <Progress percent={100} />
            </div>
            <div className="learn-block">
              <span>Bootstrap</span>
              <Progress percent={100} />
            </div>
            <div className="learn-block">
              <span>React Js</span>
              <Progress status="active" percent={50} />
            </div>
          </div>
        </div>
      </div>
      <CustomButton href={cv} download="Deepak Resume" className="cv">
        Download Cv
      </CustomButton>
    </GetCvBlockWrapper>
  );
};

export default GetCvBlock;
