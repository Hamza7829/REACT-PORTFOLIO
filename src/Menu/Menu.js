import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from './hamza.jpg';
import './Menu.css';
import { TfiHome } from "react-icons/tfi";
import { FcAbout } from "react-icons/fc";
import { SlGraduation } from "react-icons/sl";
import { FaRProject } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { BsFillHCircleFill } from "react-icons/bs";

export default function Menu({ toggle }) {
  return (
    <>
      {!toggle && (
        
        <div className='image'>
          <Zoom>
          <img src={photo} alt="Profile" />
          </Zoom>
          
        </div>
      )}
      <div className='nav-items'>
        <div className='nav-item'>
          <Fade left>
          <NavLink to="/" className='nav-link'>
            {toggle ? <TfiHome /> : <>
              <TfiHome />
              Home
            </>}
          </NavLink>
          <NavLink to="/about" className='nav-link'>
            {toggle ? <FcAbout /> : <>
              <FcAbout />
              About
            </>}
          </NavLink>
          <NavLink to="/educations" className='nav-link'>
            {toggle ? <SlGraduation /> : <>
              <SlGraduation />
              Educations
            </>}
          </NavLink>
          <NavLink to="/project" className='nav-link'>
            {toggle ? <FaRProject /> : <>
              <FaRProject />
            Project
            </>}
          </NavLink>
          <NavLink to="/contact" className='nav-link'>
            {toggle ? <IoIosContact /> : <>
              <IoIosContact />
            Contact-me
            </>}
          </NavLink>
          <NavLink to="/aboutproject" className='nav-link'>
            {toggle ? <BsFillHCircleFill /> : <>
              <BsFillHCircleFill />
            Project Details
            </>}
          </NavLink>
          </Fade>
          
        </div>
      </div>
    </>
  );
}
