import { React, useEffect } from "react";
import "./css/MainContent-4.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Carousel from "react-elastic-carousel";
import CarouselCard from "./CarouselCard";
import AOS from "aos";
import "aos/dist/aos.css";
import image from './images/gaurav.jpg'

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
        <h2 className="Heading">What client say about us?</h2>
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
          <button>Connect Now</button>
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
            <CarouselCard image={image} name={"name"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta consequatur ipsum veritatis, perferendis exercitationem quos omnis? Iusto provident "}/>
            <CarouselCard image={image} name={"name"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta consequatur ipsum veritatis, perferendis exercitationem quos omnis? Iusto provident eaque praesentium consequatur consequuntur accusantium reprehenderit? Dolores nulla ea veniam vitae."}/>
            <CarouselCard image={image} name={"name"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta consequatur ipsum veritatis, perferendis exercitationem quos omnis? Iusto provident eaque praesentium consequatur consequuntur accusantium reprehenderit? Dolores nulla ea veniam vitae."}/>
            <CarouselCard image={image} name={"name"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta consequatur ipsum veritatis, perferendis exercitationem quos omnis? Iusto provident eaque praesentium consequatur consequuntur accusantium reprehenderit? Dolores nulla ea veniam vitae."}/>
            <CarouselCard image={image} name={"name"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta consequatur ipsum veritatis, perferendis exercitationem quos omnis? Iusto provident eaque praesentium consequatur consequuntur accusantium reprehenderit? Dolores nulla ea veniam vitae."}/>
            <CarouselCard image={image} name={"name"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta consequatur ipsum veritatis, perferendis exercitationem quos omnis? Iusto provident eaque praesentium consequatur consequuntur accusantium reprehenderit? Dolores nulla ea veniam vitae."}/>
            <CarouselCard image={image} name={"name"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta consequatur ipsum veritatis, perferendis exercitationem quos omnis? Iusto provident eaque praesentium consequatur consequuntur accusantium reprehenderit? Dolores nulla ea veniam vitae."}/>
            <CarouselCard image={image} name={"name"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta consequatur ipsum veritatis, perferendis exercitationem quos omnis? Iusto provident eaque praesentium consequatur consequuntur accusantium reprehenderit? Dolores nulla ea veniam vitae."}/>
            <CarouselCard image={image} name={"name"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta consequatur ipsum veritatis, perferendis exercitationem quos omnis? Iusto provident eaque praesentium consequatur consequuntur accusantium reprehenderit? Dolores nulla ea veniam vitae."}/>
            <CarouselCard image={image} name={"name"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta consequatur ipsum veritatis, perferendis exercitationem quos omnis? Iusto provident eaque praesentium consequatur consequuntur accusantium reprehenderit? Dolores nulla ea veniam vitae."}/>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MainContent4;
