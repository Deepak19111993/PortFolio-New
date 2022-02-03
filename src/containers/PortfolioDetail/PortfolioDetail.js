import React from "react";
import { Link, useParams } from "react-router-dom";
import { CustomButton } from "../../assets/styles/Global.styles";
import portfolioDataList from "../../components/portfolioDataList";
import { PortfolioDetailWrapper } from "./PortfolioDetail.styles";

const PortfolioDetail = () => {
  const { portfolioId } = useParams();
  const productItem = portfolioDataList.find((item) => item.id == portfolioId);
  return (
    <PortfolioDetailWrapper>
      <div className="container">
        <div className="detail-wrapper">
          <div className="img-wrapper">
            <img
              className="portdetail-img"
              src={productItem.imageGet}
              alt={productItem.alt}
            />
          </div>
          <div className="detail-content">
            <h2 className="title">{productItem.title}</h2>
            {productItem.peragraph.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <div className="badges">
              {productItem.badges.map((item, index) => (
                <span key={index} className="item">
                  {item}
                </span>
              ))}
            </div>
            <div className="thumnail-images">
              {productItem.thumnailImages.map((item, index) => (
                <span key={index}>
                  <img src={item} alt="" />
                </span>
              ))}
            </div>
            {productItem?.link?.map?.((item, index) => {
              return (
                <CustomButton
                  className={`live-link item-${index}`}
                  target="_blank"
                  href={item.url}
                  key={index}
                >
                  {item.linkText}
                </CustomButton>
              );
            })}
          </div>
        </div>
      </div>
    </PortfolioDetailWrapper>
  );
};

export default PortfolioDetail;
