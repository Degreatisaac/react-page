import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Navbar';
import bannerbackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
useEffect(() => {
    AOS.init();
}, []);
   
  
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={bannerbackground} alt='banner'/>
            </div>
            <div className='home-text-section' data-aos='fade-right'>
                <h1 className='primary-heading'>Your Favourite food Delivered Hot & Fresh</h1>
                <p className='primary-text'>
                    Healthy switcher chefs do all the prep work, like pending chopping & marimating, so you can cook a fresh food.
                </p>

                <button className='secondary-button'>Order Now <FiArrowRight/> </button>
            </div>

            <div className='home-image-section' data-aos='fade-left'>
                <img src={BannerImage} alt='banner'/>
            </div>
        </div>
    </div>
  )
}

export default Home