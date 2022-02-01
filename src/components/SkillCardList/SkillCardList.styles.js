import styled from "styled-components";
import { screen } from "@testing-library/react";
import { SubTitle } from "../../assets/styles/Global.styles";

export const SkillCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  @media screen and (max-width: 1440px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 991px) {
    margin-top: 70px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
  @media screen and (max-width: 575px) {
    margin-top: 40px;
  }
`;
export const SkillCardItem = styled.div`
  width: calc(100% / 3 - 14px);
  margin-right: 20px;
  margin-bottom: 80px;
  text-align: left;
  border: 1px solid #6d6d6d;
  border-radius: 0 30px 0 0;
  padding: 20px;
  @media screen and (max-width: 1440px) {
    margin-bottom: 70px;
  }
  @media screen and (max-width: 991px) {
    width: calc(100% / 3 - 10px);
    padding: 15px;
    margin-bottom: 60px;
    margin-right: 15px;
  }
  @media screen and (max-width: 767px) {
    width: calc(100% / 2 - 8px);
    margin-bottom: 50px;
    margin-right: 15px;
    border-radius: 0 10px 0 0;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 45px;
    padding: 10px;
  }
  &:nth-child(3n) {
    margin-right: 0;
    @media screen and (max-width: 767px) {
      margin-right: 15px;
    }
    @media screen and (max-width: 575px) {
      margin-right: 0;
    }
  }
  &:nth-child(even) {
    @media screen and (max-width: 767px) {
      margin-right: 0;
    }
  }
  &:nth-last-child(-n + 3) {
    margin-bottom: 0;
    @media screen and (max-width: 767px) {
      margin-bottom: 60px;
    }
    @media screen and (max-width: 575px) {
      margin-bottom: 50px;
    }
  }
  &:nth-last-child(-n + 2) {
    @media screen and (max-width: 767px) {
      margin-bottom: 0;
    }
    @media screen and (max-width: 575px) {
      margin-bottom: 50px;
    }
  }
  &:last-child {
    @media screen and (max-width: 575px) {
      margin-bottom: 0;
    }
  }
  img {
    max-width: 90px;
    margin-bottom: 20px;
    margin-top: -70px;
    @media screen and (max-width: 1440px) {
      max-width: 70px;
      margin-bottom: 20px;
      margin-top: -60px;
    }
    @media screen and (max-width: 991px) {
      max-width: 70px;
      margin-top: -50px;
      margin-bottom: 15px;
    }
    @media screen and (max-width: 991px) {
      max-width: 60px;
      margin-top: -45px;
    }
    @media screen and (max-width: 575px) {
      max-width: 50px;
      margin-top: -35px;
    }
  }
  p {
    margin: 0;
  }
  .subtitle {
    @media screen and (max-width: 991px) {
      margin-bottom: 10px;
    }
  }
  &.item0 {
    &:hover {
      background: #3fa3ff;
      border-color: #3fa3ff;
      .subtitle,
      p {
        color: #fff;
      }
    }
  }
  &.item1 {
    &:hover {
      background: #d198eb;
      border-color: #d198eb;
      .subtitle,
      p {
        color: #fff;
      }
    }
  }
  &.item2 {
    &:hover {
      background: #feaa94;
      border-color: #feaa94;
      .subtitle,
      p {
        color: #fff;
      }
    }
  }
  &.item3 {
    &:hover {
      background: #97ee8f;
      border-color: #97ee8f;
      /* .subtitle,
      p {
        color: #fff;
      } */
    }
  }
  &.item4 {
    &:hover {
      background: #fb8c57;
      border-color: #fb8c57;
      .subtitle,
      p {
        color: #fff;
      }
    }
  }
  &.item5 {
    &:hover {
      background: #f76aa7;
      border-color: #f76aa7;
      .subtitle,
      p {
        color: #fff;
      }
    }
  }
`;
