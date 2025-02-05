import React from 'react';
import myPhoto from '../assets/headshot2.JPG';
import Typewriter from './Typewriter'; // Import the Typewriter component
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Typewriter text="Hi... my name is Risshi." speed={150} /> {/* Typewriter effect */}
      <img data-aos="fade" data-aos-delay="100" src={myPhoto} alt="Risshi Naavaal" className="my-photo" />
      <p data-aos="fade" data-aos-delay="100">I'm a software (& AI) developer passionate about building innovative solutions.</p>
    </div>
  );
};

export default Home;


