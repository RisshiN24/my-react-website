import React from 'react';

import githubLogo from '../assets/github-logo.png'; // Add this image to your project
import linkedinLogo from '../assets/linkedin-logo.png'; // Add this image to your project

const Footer = () => {
  
  const footerStyle = {
    backgroundColor: '#333', // Dark background
    color: '#fff', // White text color
    textAlign: 'center',
    padding: '20px 0',
  };

  return (
    <footer style={footerStyle}>
      <p>© 2024 My React Website. All rights reserved.</p>
      <div>
        {/* GitHub Logo */}
        <a href="https://github.com/RisshiN24" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" style={{ width: '30px', margin: '0 10px' }} />
        </a>
        {/* LinkedIn Logo */}
        <a href="https://www.linkedin.com/in/risshi-naavaal-587941268/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" style={{ width: '30px', margin: '0 10px' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
