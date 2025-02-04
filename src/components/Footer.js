import React from 'react';

// Import images of GitHub, LinkedIn, and Kaggle
import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import kaggleLogo from '../assets/kaggle-logo.png';

const Footer = () => {
  
  const footerStyle = {
    backgroundColor: '#333', // Dark background
    color: '#fff', // White text color
    textAlign: 'center',
    padding: '20px 0',
  };

  return (
    <footer style={footerStyle}>
      <p>— Risshi Naavaal —</p>
      <div>
        {/* GitHub Logo */}
        <a href="https://github.com/RisshiN24" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" style={{ width: '26px', margin: '0 10px' }} />
        </a>
        {/* Kaggle Logo */}
        <a href="https://www.kaggle.com/risshinaavaal24" target="_blank" rel="noopener noreferrer">
          <img src={kaggleLogo} alt="Kaggle" style={{ width: '26px', margin: '0 10px' }} />
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
