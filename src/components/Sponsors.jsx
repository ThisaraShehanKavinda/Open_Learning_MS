import React from 'react';
import './sponsors.css';

const Sponsors = () => {
  return (
    <div className='sponsors-container'>
      <h2 className='sponsors-title'>Our Sponsors</h2>

      <div className='sponsor'>
        <h3 className='sponsorname'>ShehanZ Coding</h3>

        <div className='sponsor-logo'>
          <div className='logo-background' />
          <div className='logo-text'>
            <p className='logo-line'>ShehanZ</p>
            <p className='logo-line'>Coding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
