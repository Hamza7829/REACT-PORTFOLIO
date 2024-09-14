import React from 'react';
import hamza from '../Menu/hamza.jpg';
import './About.css';
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <div className="container about-container">
      <Fade up>
      <div className="row align-items-center">
        <div className="col-md-6 text-center">

          <img src={hamza} alt="Muhammad Hamza" className="about-image" />
        </div>
        <div className="col-md-6">
          <p className="about-text">
            Hi, I'm Muhammad Hamza, a passionate React Developer with a keen interest in MERN stack development. With a solid foundation in JavaScript and hands-on experience in building dynamic web applications, I am dedicated to crafting efficient and scalable software solutions. My journey in tech is driven by a continuous pursuit of learning and adapting to new technologies, aiming to make meaningful contributions to the ever-evolving tech industry.
          </p>
        </div>
      </div>
  </Fade>  
    </div>
  );
}
