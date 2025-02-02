import React from 'react';
import myPhoto from '../assets/headshot.jpg';
import Typewriter from './Typewriter'; // Import the Typewriter component
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Typewriter text="Hi... my name is Risshi." speed={150} /> {/* Typewriter effect */}
      <img src={myPhoto} alt="A photo of me" className="my-photo" />
      <p>I'm a software (& AI) developer passionate about building innovative solutions.</p>
    </div>
  );
};

export default Home;


