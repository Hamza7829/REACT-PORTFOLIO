import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook ,FaWhatsapp  } from 'react-icons/fa';
import { FaXTwitter , FaInstagram } from "react-icons/fa6";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className='col-lg-4 col-sm-12 mb-4'>
            <p>&copy; 2024 Hamza. All rights reserved.</p>
          </div>
          <div className='col-lg-4 col-sm mb-4'>
            <div className="social-icons">
              <a href="www.linkedin.com/in/muhammad-hamza-978066292"><FaLinkedin size={20} /></a>
              <a href="https://github.com"><FaGithub size={20} /></a>
              <a href="https://www.facebook.com"><FaFacebook size={20} /></a>
              <a href="https://www.facebook.com"><FaWhatsapp size={20} /></a>
              <a href="https://www.facebook.com"><FaXTwitter size={20} /></a>
              <a href="https://www.facebook.com"><FaInstagram size={20} /></a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
