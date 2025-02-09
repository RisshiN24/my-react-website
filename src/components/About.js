import React from 'react';
import './About.css';
import bannerPhoto from '../assets/about-banner.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="banner-container">
        <img src={bannerPhoto} alt="Risshi Naavaal" className="banner-photo" />
        <div className="banner-overlay"></div>
      </div>
      <h1 data-aos="fade" data-aos-delay="100">About Me</h1>
      <p></p>
    </div>
  );
};

export default About;
