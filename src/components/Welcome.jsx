import React from 'react';
import { FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';
import GetstartFullstackimage from '../assets/Getstart-Fullstack-image.png';
import RegistrationprojectManagementimage from '../assets/Registration-projectManagement-image.png';
import './welcome.css';

function Welcome() {
  return (
    <div className='welcome-component-modern'>
      <div className='welcome-background-modern' />
      <div className='welcome-header'>
        <h1 className='welcome-title'>
          🌟 Welcome to the Open Online Courses Platform 🌟
        </h1>
        <p className='welcome-subtitle'>
          Explore your learning journey with innovative and engaging courses!
        </p>
      </div>
      <div className='suggestion-container'>
        <div className='course-suggestion-modern'>
          <FaChalkboardTeacher className='suggestion-icon' />
          <div className='course-details-modern'>
            <p className='course-description-modern'>
              <span className='highlighted-text-modern'>
                &quot;Project Management Skills&quot;
              </span>{' '}
              programme is now available after completing the Registration for
              Project Management course.
            </p>
          </div>
          <img
            className='course-image-modern'
            alt='Project Management Icon'
            src={RegistrationprojectManagementimage}
          />
        </div>
        <div className='course-suggestion-modern'>
          <FaLaptopCode className='suggestion-icon' />
          <div className='course-details-modern'>
            <p className='course-description-modern'>
              <span className='highlighted-text-modern'>
                &quot;Trainee - Full Stack Developer&quot;
              </span>{' '}
              programme is now available after completing the Getting Started
              course.
            </p>
          </div>
          <img
            className='course-image-modern'
            alt='Full Stack Development Icon'
            src={GetstartFullstackimage}
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
