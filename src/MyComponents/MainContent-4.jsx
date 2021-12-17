import { React, useEffect } from "react";
import "./css/MainContent-4.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Carousel from "react-elastic-carousel";
import CarouselCard from "./CarouselCard";
import AOS from "aos";
import "aos/dist/aos.css";
import test1 from './images/test1.jpeg'
import test2 from './images/test2.jpeg'
import test3 from './images/test3.jpeg'
import test4 from './images/test4.jpeg'
import test5 from './images/test5.jpeg'
import test6 from './images/test6.jpeg'
import test7 from './images/test7.jpeg'
import test8 from './images/test8.jpeg'

function MainContent4() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <div id="testimonials" className="mainContent4">
      <div
        className="main-heading-4"
        data-aos="fade-right"
        data-aos-once="true"
      >
        <p className="u-heading">Testimonials</p>
        <h2 className="Heading-4">What client say about us?</h2>
      </div>
      <div data-aos="zoom-in" data-aos-once="true" className="black-back flex4">
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="col1 flex-child-element4"
        >
          <h2>Connect with other members</h2>
          <p className="right-para">
            Be it a short term isolated issue, technical architectural
            guidelines, aid and assessment of technological podia, Signature
            Infotech squad will ethically, professionally, and independent resol
            the subiect with best possible outcomes.
          </p>
          <a href="#contactus">Connect Now </a> 
          <span>
            <FaArrowAltCircleRight
              style={{ color: "white", fontSize: "15px" }}
            />
          </span>
        </div>

        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="col2 flex-child-element4"
        >
          
          <Carousel itemsToShow={3} breakPoints={breakPoints}>
            <CarouselCard image={test1} name={"LARA"} content={"Zedital Digital Market Agency re-analyzed keyword prioritization and campaign development by getting more keywords that would help conversion from people doing Google searches."}/>
            <CarouselCard image={test2} name={"HARISH"} content={"We have a great business relationship with Zedital Market Agency. We had worked with several other marketing companies in the past who didn't deliver results and I'm happy to say Zedital Market Agency is doing that for us. They help bring our vision to life in a way that makes sense."}/>
            <CarouselCard image={test3} name={"SANYA"} content={"We had worked with several other marketing companies in the past who didn't deliver results and I'm happy to say Zedital Market Agency is doing that for us."}/>
            <CarouselCard image={test4} name={"JOSEPH"} content={"Zedital Market Agency has done a wonderful job redesigning our website to take it from plain and functional to amazingly professional."}/>
            <CarouselCard image={test5} name={"ROHIT"} content={"We would highly recommend Zedital Market Agency to any business that needs a hand improving their internet traffic or their business."}/>
            <CarouselCard image={test6} name={"DAVID"} content={"The price was competitive and all our requirements were met. If somebody were to ask me for something similar, I would definitely recommend you guys!"}/>
            <CarouselCard image={test7} name={"VIPUL"} content={"At Zedital this is the kind of product I was looking for. I'm so happy I could cry!!"}/>
            <CarouselCard image={test8} name={"GAURAV"} content={"The support staff at Zedital is absolutely fantastic. Only nice things to say about them and support goes a long way as most of us will have painful first hand experiance with."}/>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MainContent4;
