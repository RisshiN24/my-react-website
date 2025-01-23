import React from 'react';
import './Experience.css'; // Import CSS for styling

// Define the projects array with project details
const projects = [
  {
    name: 'LifeChat',
    description: 'A Chrome extension chatbot for personal growth and motivation.',
    image: require('../assets/lifechat.jpg'), // Replace with actual image path
    link: 'https://github.com/RisshiN24/life-chat',
  },
  {
    name: 'News Feed Generator',
    description: 'An interactive web app that provides personalized news feeds with summaries and source links.',
    image: require('../assets/news-feed-generator.jpg'), // Replace with actual image path
    link: 'https://github.com/RisshiN24/news-feed-generator',
  },
  // Add more projects here as needed
];

const Experience = () => {
  return (
    <div className="experience">
      <h2>My Projects</h2>
      {/* Create a grid to display project cards */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Each project links to its GitHub repository */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {/* Display the project image */}
              <img src={project.image} alt={project.name} className="project-image" />
              {/* Display project name and description */}
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
