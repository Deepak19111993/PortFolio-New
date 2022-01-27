import styled from "styled-components";
import { screen } from "@testing-library/react";

export const ProjectListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: 250px 250px; */
  grid-gap: 15px;
  @media screen and (max-width: 1199px) {
    /* grid-template-rows: 220px 220px; */
  }
  @media screen and (max-width: 991px) {
    /* grid-template-rows: 200px 200px; */
    grid-gap: 10px;
  }
  @media screen and (max-width: 767px) {
    grid-gap: 5px;
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const ProjectItem = styled.div`
  position: relative;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30%;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: 1440px) {
    padding: 32%;
  }
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    padding: 35%;
    border-radius: 5px;
  }
  @media screen and (max-width: 575px) {
    padding: 40%;
  }
  &.item0 {
    background-color: #70c1b3;
    grid-row: 1 / 4;
    @media screen and (max-width: 575px) {
      grid-row: 1/2;
    }
  }
  &.item1 {
    background-color: #dcbc4c;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  &.item2 {
    background-color: #a3ca3b;
    grid-row: 2 / 4;
    grid-column: 2 / 3;
    @media screen and (max-width: 575px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
  &.item3 {
    background-color: #3daee3;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    @media screen and (max-width: 575px) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
  }
  &.item4 {
    background-color: #bb8ed8;
    grid-row: 2 / 4;
    grid-column: 3 / 4;
    @media screen and (max-width: 575px) {
      grid-column: 2 / 3;
    }
  }
  img {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(22, 85, 244, 80%);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: 0.2s all;
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 3px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    @media screen and (max-width: 1440px) {
      font-size: 20px;
    }
    @media screen and (max-width: 991px) {
      font-size: 18px;
      letter-spacing: 2px;
    }
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
    @media screen and (max-width: 575px) {
      font-size: 14px;
    }
    .icon-wrapper {
      margin-top: 10px;
      display: flex;
      align-items: center;
      .icon {
        background: #fff;
        border-radius: 5px;
        font-size: 20px;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.2s all;
        @media screen and (max-width: 1440px) {
          width: 40px;
          height: 40px;
          font-size: 18px;
        }
        @media screen and (max-width: 1199px) {
          width: 35px;
          height: 35px;
        }
        @media screen and (max-width: 767px) {
          width: 30px;
          height: 30px;
          font-size: 16px;
        }
        &::before {
          padding-left: 3px;
          @media screen and (max-width: 1199px) {
            padding-left: 2px;
          }
        }
        &:not(:last-child) {
          margin-right: 10px;
        }
        &:hover {
          background: none;
          &::before {
            color: #fff;
          }
        }
        &.fill-heart {
          background: none;
          &:hover {
            background: none;
            &::before {
              color: #ff0000;
            }
          }
        }
      }
    }
  }
  &:hover {
    .overlay {
      opacity: 1;
      transform: translateX(0);
    }
  }
  &.portfolio-page {
    padding: 35%;
    @media screen and (max-width: 767px) {
      padding: 38%;
    }
  }
`;
