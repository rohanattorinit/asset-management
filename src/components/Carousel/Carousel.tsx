import React from "react";
import image1 from "../../assets/teamwork.gif";
import "../Carousel/Carousel.css";

function HeroImage() {
  return (
    <div className="slick-slide ">
      <img src={image1} alt="" />
    </div>
  );
}

export default HeroImage;
