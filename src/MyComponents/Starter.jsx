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
        RUPADATA DIGITAL AGENCY
      </p>
      <p data-aos="zoom-out-down" data-aos-once="true" className="Quote">
        Build Website, Application, UI/UX Design and Optimise! We do it all for you
      </p>
      <div className="flex-btn">
        <a data-aos="fade-down" data-aos-once="true" className="flex-btn-child" href="#services">What we do?</a>
        <p data-aos="zoom-in" data-aos-once="true" className="flex-btn-child">Or</p>
        <a data-aos="fade-down" data-aos-once="true" className="flex-btn-child send-notification" target="_blank" rel="noreferrer" href="https://wa.me/+6287738206473">Send Notification</a>
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
