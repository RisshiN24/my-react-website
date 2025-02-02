import React, { useState, useEffect } from 'react';
import './Typewriter.css'; // Import CSS for styling

const Typewriter = ({ text, speed = 150 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText(''); // Reset text
        setIndex(0);
      }, 2000); // Pause before restarting
    }
  }, [index, text, speed]);

  return (
    <h1 className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </h1>
  );
};

export default Typewriter;
