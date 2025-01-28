import React from 'react';
import myPhoto from '../assets/headshot.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <img src={myPhoto} alt="A photo of me" className="my-photo" />
      <p>I'm Risshi Naavaal – a software (& AI) developer passionate about building innovative solutions.</p>
    </div>
  );
};

export default Home;


