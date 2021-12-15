import React from "react";
import "./css/CarouselCard.css";

function CarouselCard({image,name,content}) {
  return (
    <div className="carouselCard">
      <div className="whiteCard">
        <div className="cimage">
            <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>{name}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;