import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className='contact-page-wrapper' data-aos="zoom-in-up">
        <h1 className='primary-heading'>Have Question In Mind?</h1>
        <h1 className='primary-heading'>Let Us Help You</h1>

        <div className='contact-form-container'>
            <input type='text' placeholder='youremail@gmail.com'/>
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
};

export default Contact;