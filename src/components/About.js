import React from 'react';
import './About.css';
import bannerPhoto from '../assets/about-banner.jpg';
import basketballPhoto from '../assets/basketball.jpg';
import restaurantPhoto from '../assets/restaurant.jpg';
import footballPhoto from '../assets/football.png';
import bollywoodPhoto from '../assets/bollywood.jpg';
import codingPhoto from '../assets/coding.jpg';

const About = () => {
  const interests = [
    { text: '🏀 Playing basketball & staying active in the gym', image: basketballPhoto },
    { text: '🍽️ Eating at local restaurants', image: restaurantPhoto },
    { text: '🏈 Following the NFL (Go Ravens!)', image: footballPhoto },
    { text: '🎵 Listening to Bollywood music', image: bollywoodPhoto }
  ];

  return (
    <div className="about">
      <div data-aos="fade" data-aos-delay="100" className="banner-container">
        <img src={bannerPhoto} alt="Risshi Naavaal" className="banner-photo" />
        <div className="banner-overlay"></div>
      </div>

      <h1 data-aos="fade" data-aos-delay="100">About Me</h1>

      <div className="content">
        <section data-aos="fade" data-aos-delay="100" className="story">
          <h2>My Journey into Software Development</h2>
          <p>
            My love for programming started with my <strong>competitive spirit</strong>. In middle school, one of my best 
            friends was passionate about coding in <strong>Scratch</strong>. Determined to match (and surpass) his skills, 
            I spent hours learning how to create cool animations with block-based code.
          </p>
          <p>
            As I improved, I moved on to <strong>typed languages</strong> like Python, JavaScript, and Java. The ability to 
            create something from scratch, automate tasks, and <strong>solve problems efficiently</strong> fascinated me. 
            Over time, I realized that software development isn’t just about competition—it's about innovation and 
            <strong> helping others</strong>.
          </p>
          <p>
            Now, my goal is to <strong>build impactful solutions</strong> that make life easier, automate workflows, and 
            improve efficiency for businesses and individuals alike.
          </p>
        </section>

        <img src={codingPhoto} alt="Coding on a computer"></img>

        <section data-aos="fade" data-aos-delay="100" className="interests">
          <h2>(Other) Things I Love</h2>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-item">
                <img src={interest.image} alt={interest.text} />
                <p>{interest.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
