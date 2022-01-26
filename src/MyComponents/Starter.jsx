import { React, useEffect } from "react";
import image from "./images/Header-image.jpg";
import "./css/starter.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Starter() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="Heading">
      <p data-aos="zoom-in-up" data-aos-once="true" className="mainHeading">
        ZEDITAL MARKETING AGENCY
      </p>
      <p data-aos="zoom-out-down" data-aos-once="true" className="Quote">
        Advertise, analyse and optimise! We do it all for you
      </p>
      <div className="flex-btn">
        <a data-aos="fade-down" data-aos-once="true" className="flex-btn-child" href="#services">What we do?</a>
        <p data-aos="zoom-in" data-aos-once="true" className="flex-btn-child">Or</p>
        <a data-aos="fade-down" data-aos-once="true" className="flex-btn-child send-notification" target="_blank" rel="noreferrer" href="https://wa.me/message/IQKHO7Q5FO4HO1">Send Notification</a>
      </div>
      <img
        className="starter-img"
        data-aos="zoom-in-up"
        data-aos-once="true"
        src={image}
        alt=""
      />
    </div>
  );
}

export default Starter;
