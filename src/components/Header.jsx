import React from 'react';
import { useNavigate } from 'react-router-dom';
import usjpLogo from '../assets/usjp logo.png';
import './header.css';

const Header = ({ featuredCoursesRef }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/signin');
  };

  const scrollToCourses = () => {
    if (featuredCoursesRef && featuredCoursesRef.current) {
      featuredCoursesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='intro-container'>
      <header className='header'>
        <div className='header-content'>
          <div className='header-left'>
            <div className='platforminfo5'>
              <p className='platform-heading5'>OPEN LEARNING PLATFORM</p>
              <p className='university-name5'>
                University Of Sri Jayewardenepura
              </p>
            </div>
          </div>
          <img className='logo' alt='USJP Logo' src={usjpLogo} />

          <button
            className='courses-link'
            onClick={scrollToCourses}
            onKeyPress={(e) => e.key === 'Enter' && scrollToCourses()}
          >
            Courses
          </button>

          <div className='separator' />
          <button className='login-btn' onClick={handleLoginClick}>
            <span className='login-btn-text'>Login</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
