import React from 'react';
import cloudDeveloper from '../assets/cloudDeveloper.png';
import dataScientist from '../assets/dataScientist.png';
import devOps from '../assets/devOps.png';
import fullstackDeveloper from '../assets/fullstackDeveloper.png';
import mobileDeveloper from '../assets/mobileDeveloper.png';
import pythonProgrammer from '../assets/pythonProgrammer.png';
import securityProfessional from '../assets/securityProfessional.png';
import softwareTest from '../assets/softwareTest.png';
import softwareTester from '../assets/softwareTester.png';
import uxProfessional from '../assets/uxProfessional.png';
import webDeveloper from '../assets/webDeveloper.png';
import './careerPath.css';

const CareerPath = () => {
  return (
    <div className='careerPathFrame'>
      <div className='careerPathBack' />
      <h2 className='careerPaths'>Career Paths</h2>
      <p className='youMaySelect'>
        You may select any of the career options below to learn more
      </p>

      <div className='cardsContainer'>
        {/* Full Stack Developer Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>Full Stack Developer</div>
          <img
            className='cardImage'
            alt='Full Stack Developer'
            src={fullstackDeveloper}
          />
        </div>

        {/* Python Programmer Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>Python Programmer</div>
          <img
            className='cardImage'
            alt='Python Programmer'
            src={pythonProgrammer}
          />
        </div>

        {/* Web Developer Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>Web Developer</div>
          <img className='cardImage' alt='Web Developer' src={webDeveloper} />
        </div>

        {/* Data Scientist Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>Data Scientist</div>
          <img className='cardImage' alt='Data Scientist' src={dataScientist} />
        </div>

        {/* Software Tester Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>Software Tester</div>
          <img
            className='cardImage'
            alt='Software Tester'
            src={softwareTester}
          />
        </div>

        {/* Software Test Automation Engineer Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>Software Test Automation Engineer</div>
          <img
            className='cardImage'
            alt='Software Test Automation Engineer'
            src={softwareTest}
          />
        </div>

        {/* DevOps Professional Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>DevOps Professional</div>
          <img className='cardImage' alt='DevOps Professional' src={devOps} />
        </div>

        {/* Mobile Developer Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>Mobile Developer</div>
          <img
            className='cardImage'
            alt='Mobile Developer'
            src={mobileDeveloper}
          />
        </div>

        {/* UX Professional Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>UX Professional</div>
          <img
            className='cardImage'
            alt='UX Professional'
            src={uxProfessional}
          />
        </div>

        {/* Security Professional Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>Security Professional</div>
          <img
            className='cardImage'
            alt='Security Professional'
            src={securityProfessional}
          />
        </div>

        {/* Cloud Developer Card */}
        <div className='card'>
          <div className='cardBackground' />
          <div className='photoBackground' />
          <div className='textBackground' />
          <div className='cardTitle'>Cloud Developer</div>
          <img
            className='cardImage'
            alt='Cloud Developer'
            src={cloudDeveloper}
          />
        </div>
      </div>
    </div>
  );
};

export default CareerPath;
