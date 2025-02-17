import React, { useEffect } from "react";
import "./css/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import 'react-custom-alert/dist/index.css';
/*JSX comment import { AiFillTwitterCircle } from "react-icons/ai";

 import { alert } from 'react-custom-alert'; */

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  
/* JSX comment  const alertSuccess = () => alert({ message: 'Thank you for subscribing!', type: 'success' }); 

  const subscribe = (e) => {
    e.preventDefault();
    alertSuccess();
    e.target.reset();
   }; */
 
  let newDate = new Date();
  let year = newDate.getFullYear();
  return (
    <div className="footer-box">
      <div className="flex-box">
        <div className="flex-child-1">
          <div className="map">
            <p className="footer-headings">Our Office</p>
            <iframe
              title="map"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.336223290313!2d78.01669510221942!3d30.284488550113302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bd7b00eb035%3A0xa679c6982c0e6fe!2sVigilance%20OffIce%20Rd%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1639296057771!5m2!1sen!2sin"
              src="https://maps.google.com/maps?q=jl%20nasional%20III%20panggungharjo,%20sewon,%20bantul,%20yogyakarta&t=&z=19&ie=UTF8&iwloc=&output=embed"
              width="400"
              height="300"
              style={{ border: 0 }}
              
              loading="lazy"
            ></iframe>
            <p>
              Jl. Nasional III Panggungharjo, Sewon, Bantul, Yogyakarta
            </p>
          </div>
        </div>
        <div className="flex-child-2">
          <div className="c2-sec-1">
            <p className="footer-headings">Say Hello</p>
            <p>
              If you are interested in working with us or just want to say hello
              simply drop us a line! <a className="e-mail-responsive" href="mailto:cysco374@gmail.com">cysco374@gmail.com</a>
            </p>
          </div>
          <div className="c2-sec-2">
            <p className="footer-headings">Quick Links</p>
            <ul>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              {/* <li>
                <a href="#testimonials">Testimonial</a>
              </li> */}
              <li>
                <a href="#aboutus">About us</a>
              </li>
              <li>
                <a href="#contactus">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-child-3">
       {/* JSX comment 
          <div className="c3-sec-1">
            <p className="footer-headings">subscribe us</p>
          </div> */}
          <div className="c3-sec-2">
            <p className="footer-headings">Follow us on</p>
            <a href="https://www.facebook.com/JasaWebsiteJogja.Rupadata" target="_blank" rel="noreferrer">
              <MdFacebook className="footer-icons" />
            </a>
            <a href="https://www.instagram.com/jasaweb.jogja" target="_blank" rel="noreferrer">
              <BsInstagram className="footer-icons" />
            </a>
            {/* JSX comment <a href="https://">
              <AiFillTwitterCircle className="footer-icons" />
            </a>
            <a href="https://" target="_blank" rel="noreferrer">
              <BsLinkedin className="footer-icons" />
             </a> */}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright© {year} Rupadata</p>
      </div>
    </div>
  );
}

export default Footer;
