import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./MyOwlCarousel.css";
const MyOwlCarousel = () => {
  const options = {
    loop: true,
    items: 1,
    autoplay: true,
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
      {/* <div className="item">
        <img src={require("../asset/img02.jpg")} alt=" " />
      </div>
      <div className="item">
        <img src={require("../asset/img03.jpg")} alt=" " />
      </div>
      <div className="item">
        <img src={require("../asset/img04.jpg")} alt=" " />
      </div> */}
      <div className="item item01"></div>
      <div className="item item02"></div>
      <div className="item item03"></div>
      <div className="item item04"></div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel;
