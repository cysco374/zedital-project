import React from "react";
import "./css/CarouselCard.css";

function CarouselCard({image,name,star,content}) {
  return (
    <div className="carouselCard">
      <div className="whiteCard">
        <div className="cimage">
            <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>{name}</h3>
          {star}
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;