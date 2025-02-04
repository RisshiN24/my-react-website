import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './Experience.css';

const projects = [
  {
    name: 'LifeChat',
    description: 'A Chrome extension chatbot for personal growth and motivation.',
    image: require('../assets/lifechat.jpg'),
    link: 'https://github.com/RisshiN24/life-chat',
  },
  {
    name: 'News Feed Generator',
    description: 'An interactive web app that provides personalized news feeds with summaries and source links.',
    image: require('../assets/news-feed-generator.jpg'),
    link: 'https://github.com/RisshiN24/news-feed-generator',
  },
];

const Experience = () => {
  const defaultLayout = defaultLayoutPlugin();
  return (
    <div className="experience">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} className="project-image" loading="lazy"/>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <h2>Resume/CV</h2>
      <div className="pdf-container">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/resume.pdf" plugins={[defaultLayout]} />
        </Worker>
      </div>
    </div>
  );
};

export default Experience;
