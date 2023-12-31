import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {

  useEffect(() => {
    AOS.init();
}, []);
   

  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="aboutbackground" />
        </div>

        <div className='about-section-image-container' data-aos='fade-right'>
            <img src={AboutBackgroundImage} alt="aboutbackgroud" />
        </div>

        <div className='about-section-text-container' data-aos='zoom-in-down'>
           <p className='primary-subheading'>About</p>
           <h1 className='primary-heading'>
            Food is An Important Part of A Balanced Diet
           </h1>

           <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil illum perferendis cumque minus reiciendis suscipit ut eius praesentium eaque eum!
           </p>

           <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit accusamus voluptatibus quaerat laudantium ullam.
           </p>

           <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
        </div>

      
        
    </div>
  )
};

export default About;