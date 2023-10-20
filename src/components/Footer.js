import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one' data-aos="flip-left">
        <div className='footer-logo-container'>
            <img src={Logo} alt='logo'/>
        </div>

        <div className='footer-icons'>
            <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
        </div>

        <div className='footer-section-two' data-aos="flip-right">
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>

            <div className='footer-section-columns'>
                <span>244-5333-7783</span>
                <span>hello@foodie.com</span>
                <span>press@foodie.com</span>
                <span>contact@foodie.com</span>
            </div>

            <div className='footer-section-columns'>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  );
};

export default Footer;