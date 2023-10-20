import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ProfilePic from '../Assets/john-doe-image.png';
import { AiFillStar } from "react-icons/ai";


const Testimonial = () => {

  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top' data-aos='zoom-in-up'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis eaque velit amet voluptatum laborum.</p>
        </div>

        <div className='testimonial-section-bottom' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img src={ProfilePic} alt='profile'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis magni incidunt aliquam facilis harum.</p>

            <div className='testimonials-stars-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>

            <h2>John Doe</h2>
        </div>
    </div>
  )
};

export default Testimonial;