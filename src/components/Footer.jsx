import React from 'react';
import usjLogo from '../assets/usjp logo.png';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-section usj-info'>
          <div className='usj-title'>
            <p className='platform-name'>OPEN LEARNING PLATFORM</p>
            <p className='university-name'>University of Sri Jayewardenepura</p>
          </div>
          <img className='usj-logo' alt='USJ Logo' src={usjLogo} />
        </div>

        <div className='footer-section sponsor-info'>
          <p className='sponsored-by'>Sponsored By</p>
          <div className='sponsor_logo'>
            <div className='logo_background'></div>
            <div className='sponsor-name'>
              <p>ShehanZ</p>
              <p>Coding</p>
            </div>
          </div>
        </div>

        <div className='footer-section contact-info'>
          <p className='contact-title'>Get In Touch</p>
          <div className='contact-details'>
            <p>
              University of Sri Jayawardenepura Centre for Open & Distance
              Learning - CODL
            </p>
            <p>011 308 2787/8</p>
            <p>011 265 0301 ext. 3850,3851</p>
            <p>open@usj.lk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
