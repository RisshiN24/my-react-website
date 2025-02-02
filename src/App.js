import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Interests from './components/Interests';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/interests" element={<Interests />} /> {/* Interests page */}
            <Route path="/experience" element={<Experience />} /> {/* Experience page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
