import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import PickMails from '../Assets/pick-meals-image.png';
import ChooseMails from '../Assets/choose-image.png';
import DeliveryMails from '../Assets/delivery-image.png';

function Work() {

  useEffect(() => {
    AOS.init();
}, []);

    const workInfoData = [
        {
            image: PickMails,
            title: 'Pick Mails',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit accusamus voluptatibus',
        },

        {
            image: ChooseMails,
            title: 'Choose How Often',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit accusamus voluptatibus',
        },

        {
            image: DeliveryMails,
            title: 'Fast Deliveries',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit accusamus voluptatibus',
        },
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top' data-aos='zoom-in-up'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How it Works</h1>
            <p className='primary-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, pariatur.</p>
        </div>

        <div className="work-section-bottom" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="person" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Work;