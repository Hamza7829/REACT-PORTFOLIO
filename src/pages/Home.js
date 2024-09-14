import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import About from '../pages/About';
import Education from '../pages/Educations';
import Tech from '../pages/Tech';
import Project from './Project';
import './Home.css';
import { useTheme } from '../components/Context';
import { FaSun, FaMoon } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Contact from './Contact';

export default function Home() {
  const [theme, setTheme] = useTheme(); // Getting theme state from context

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle between light and dark themes
  };

  return (
    <>
   <Fade right>
   <div className={`home ${theme === 'dark' ? 'dark-theme' : ''}`}>
        <h2>Hi, I'm Muhammad Hamza</h2>
        <h3>
          <Typewriter
            options={{
              strings: ['Full Stack Developer!', 'React Developer!', 'MERN Stack Developer!'],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>

        <div className="home-button">
          <button className="btn btn-success">Hire me</button>
          <a href="./resume.pdf" download="Hamza_CV.pdf" className="btn btn-primary">
            Download CV
          </a>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
        <br />
        <About />
        <Education />
        <Tech />
        <Project />
        <Contact />
      </div>
   </Fade>
      
    </>
  );
}
