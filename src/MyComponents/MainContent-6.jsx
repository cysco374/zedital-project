import { React, useEffect } from "react";
import "./css/MainContent-6.css";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
function MainContent6() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div id="contactus" className="mainContent6">
      <div className="heading5">
        <h1 data-aos="fade-right" data-aos-once="true">
          Contact Us
        </h1>
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="underline5"
        ></div>
      </div>
      <p data-aos="fade-up" data-aos-once="true" className="para6-1">
        Fill out the form below and one of our advisor's will get in touch
        promptly, alternatively you can email us at{" "}
        <a href="mailto:">info@zedital.com</a>
      </p>

      <div
        data-aos="zoom-in-up"
        data-aos-once="true"
        className="black-back flex6"
      >
        <div
          data-aos="flip-up"
          data-aos-once="true"
          className="flex-child-element6 c6-col1"
        >
          <div className="parent6">
            <div className="child">
              <div className="c6-circle-1 ">
                <MdLocationPin style={{ color: "white", fontSize: "40px" }} />
              </div>
            </div>
            <div className="child1">
              <p>Address</p>
              <p>
                Phase 1, Shanti Vihar, Kargi grant, Near Vigilance Office road,
                Dehradun-248001
              </p>
            </div>
          </div>

          <div className="parent6">
            <div className="child">
              <div className="c6-circle-1 ">
                <MdPhone style={{ color: "white", fontSize: "40px" }} />
              </div>
            </div>
            <div className="child1">
              <p>Mobile number</p>
              <p>+91 85274 19334</p>
            </div>
          </div>
          <div className="parent6">
            <div className="child">
              <div className="c6-circle-1 ">
                <MdMail style={{ color: "white", fontSize: "40px" }} />
              </div>
            </div>
            <div className="child1">
              <p>E-Mail</p>
              <p>info@zedital.com</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-once="true" className="c6-col2">
          {" "}
        </div>
        <div
          data-aos="flip-down"
          data-aos-once="true"
          className="flex-child-element6 c6-col3"
        >
          <div className="form-content">
            <h2>Send Message</h2>
            <form method="post">
              <div className="txt-field">
                <input type="text" required />
                <span></span>
                <label>Full name</label>
              </div>
              <div className="txt-field">
                <input type="email" required />
                <span></span>
                <label>E-Mail</label>
              </div>
              <div className="txt-field">
                <input type="text" required />
                <span></span>
                <label>Type your message</label>
              </div>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent6;
