import React, { useState } from 'react';
import { useTheme } from '../components/Context';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import './contact.css';
import contact from './img.webp';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const { darkMode } = useTheme();
  const [name , setName]=useState('');
  const [mail , setMail]=useState('');
  const [msg , setMsg]=useState('');

  const handleSubmit=(event)=>{
event.preventDefault();
try {
  if(!name || !mail || !msg){
   toast.error("please input all field")
  }
} catch (error) {
  console.log(`Error : ${error}`)
}
  }
  return (
    <div className={`container mt-5 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <Fade left>
            <img 
              src={contact}
              alt="Contact Us" 
              className="img-fluid contact-image"
            />
          </Fade>
        </div>
        <div className="col-md-6">
          <Fade right>
            <div className="contact-form">
              <h2>Contact With</h2>
              <div className="social-icons">
                <a href="https://www.linkedin.com"><FaLinkedin size={30} /></a>
                <a href="https://github.com"><FaGithub size={30} /></a>
                <a href="https://www.facebook.com"><FaFacebook size={30} /></a>
              </div>
              <p>OR</p>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Enter your Name" value={name}
                  onChange={(event)=>setName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Enter Your Email Address" value={mail} 
                  onChange={(event)=>setMail(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="3" placeholder="Write your message" value={msg}
                  onChange={(event)=>setMsg(event.target.value)}
                  ></textarea>
                </div>
                <Zoom>
                <button className="btn btn-dark" onClick={handleSubmit}>SEND MESSAGE</button>
                    </Zoom>      
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
