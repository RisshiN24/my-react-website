import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import './App.css';

function App() {
  // To implement AOS and load it globally when app starts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1.2 sec)
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/about" element={<About />} /> {/* About page */}
            <Route path="/experience" element={<Experience />} /> {/* Experience page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
