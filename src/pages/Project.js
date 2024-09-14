import React from 'react';
import './project.css';
import commerce from './commerce.jpeg';
import dental from './Dental.jpg';
import ecommerce from './e-commerce.jpeg';
import { useTheme } from '../components/Context';
import Flip from 'react-reveal/Flip';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

export default function Project() {
  const { darkMode } = useTheme();
  const Projects = [
    {
      id: 1,
      title: "E-Commerce",
      techStack: ["React"],
      category: "Web App",
      image: ecommerce,
      description: "E-Commerce project for shops to buy somethings",
    },
    {
      id: 2,
      title: "Dental Appointment",
      techStack: ["React"],
      category: "Web App",
      image: dental,
      description: "Final Year Projects",
    },
    {
      id: 3,
      title: "Simple Blog Web",
      techStack: ["React"],
      category: "Web App",
      image:"https://assets.justinmind.com/wp-content/uploads/2019/11/web-design-blogs-onextrapixel.png",
      description: "Create a simple blog website with the help of Ai",
    },
  ];

  return (
    <div className={`container mt-5 ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className='text-center text-success'>Top Recent Projects</h2>
      <p className='text-center'>
        I recently completed a project , which includes  React Js.
      </p>
      
      <div className='row justify-content-center'>
        {Projects.map((project) => (
          <div className='col-lg-4 col-md-6 mb-4' key={project.id}>
            <Flip top>
              <div className='card h-100 shadow-sm'>
                <div className='card-header text-white bg-warning'>{project.category}</div>
                <img src={project.image} alt={project.title} className='card-img-top' />
                <div className='card-body'>
                  <h5 className='card-title'>{project.title}</h5>
                  <p className='card-text'>{project.description}</p>
                  <div className='techStack mb-3'>
                    {project.techStack.map((tech) => (
                      <span key={tech} className='badge tech-badge'>{tech}</span>
                    ))}
                  </div>
                  <a href="https://github.com/Hamza7829" className='m-3'><FaGithub size={20} /></a>
                  <a href="www.linkedin.com/in/muhammad-hamza-978066292"><FaLinkedin size={20} /></a>
                </div>
              </div>
            </Flip>
          </div>
        ))}
      </div>
    </div>
  );
}
