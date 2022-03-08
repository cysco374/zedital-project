import { React, useEffect } from "react";
import "./css/MainContent-1.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const MainContent1 = () => {
  let dailyVisits = 2.75;
  let clients = 250;
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="mainContent1">
      <div className="flex">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex-child-element"
        >
          <p className="head">Let's connect</p>
          <p className="head1">Getting You Connected To Your Audience</p>

          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <ul className="dc">
                <li>
                  {isVisible ? (
                    <CountUp end={dailyVisits} decimals={2} duration={1.5} />
                  ) : (
                    0
                  )}
                  k
                </li>

                <li>
                  {isVisible ? <CountUp end={clients} duration={1.5} /> : 0}+
                </li>
              </ul>
            )}
          </VisibilitySensor>

          <ul className="under-dc">
            <li>Daily Visits</li>
            <li>Clients</li>
          </ul>
        </div>
        <div className="flex-child-element">
          <div className="para">
            <p data-aos="fade-up" data-aos-once="true" className="right-para">
              We are in the age of the audience-where, the people we are trying
              to reach are in the driving seat. We know audience are less
              tolerant of advertising than ever. Advertising today is received
              on an audience's terms not a brands's. And they will dismiss the
              unwelcome Instantly.
            </p>
            <p data-aos="fade-up" data-aos-once="true" className="right-para">
              We at Rupadata are driven by technology and data as much as design
              and content to ensure we fulfill our key mission of helping our
              clients to achieve their success. Our digital solution uses data to
              segment consumers by demographics or interests in order to find the
              holy grail that is the right person on the right device at the
              right moment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent1;
