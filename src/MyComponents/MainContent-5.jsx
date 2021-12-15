import { React, useEffect } from "react";
import "./css/MainContent-5.css";
import handicapped_guy from "./images/handicapped_guy.png";
import { TiTick } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";

function MainContent5() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div id="aboutus" className="mainContent5">
      <div className="heading5">
        <h1 data-aos="fade-right" data-aos-once="true">
          Get to know us
        </h1>
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="underline5"
        ></div>
      </div>
      <p data-aos="fade-up" data-aos-once="true" className="para5-1">
        Zaigital Digital Agency offers the best IT and Advertise services to all
        types of Small & Medium Businesses in the World, Academic Institutions,
        NOS, Firms. We understand your business and bring you to the top with
        new creative ideas and technologies.
      </p>
      <div className="flex flex-item-5">
        <div
          data-aos="flip-right"
          data-aos-once="true"
          className="flex-child-element"
        >
          <img className="handicapped_guy" src={handicapped_guy} alt="" />
        </div>
        <div className="flex-child-element second-item">
          <div data-aos="flip-left" data-aos-once="true">
            <h1>Why Choose Zedital Marketing Agency?</h1>
            <p className="para5-2">
              We have highly skilled engineers with excellent technical
              knowledge and experience in using the latest software standards.
              We have built a large pool of knowledge that we apply to deliver
              solutions that meet client's needs, expectations and budget. By
              putting our clients at the heart of everything we do, we are proud
              that we are still supporting our very first business client.
            </p>
          </div>
          <ul className="list5">
            {}
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Receive the long time solution
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Get the best deal for any solution
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Constant & clean communication
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Time to time delivery of Quality work
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Connect with trust & long term
              relationships
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Increase your business growth and
              expand the possibilites
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> We use latest & Flexible Technology
              for your business
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> We are passionate about our work and
              wish you success in your endeavor
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainContent5;
