import React, { useState } from 'react';
import { FiBarChart, FiLogOut, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import NotificationIcon6 from '../assets/Notification-Icon.png';
import profilePicture from '../assets/Profile Picture.png';
import './home-Header.css';

const HomeHeader = ({ newEventNotification }) => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    setNotificationVisible(!notificationVisible);
  };

  const handleProfileClick = () => {
    setProfileMenuVisible(!profileMenuVisible);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleGoToProfile = () => {
    navigate('/profile');
  };

  const handleGoToGrade = () => {
    navigate('/gradePage');
  };

  return (
    <header className='home-header'>
      <div className='header-left'>
        <div className='platformtitle'>OPEN LEARNING PLATFORM - USJP</div>
      </div>
      <div className='header-right'>
        {/* Notification Section */}
        <div className='notification-cont'>
          <button
            className='notification-icon-button'
            onClick={handleNotificationClick}
            aria-label='Show notifications'
          >
            <img
              src={NotificationIcon6}
              alt='Notification Icon'
              className='notification-ico'
            />
          </button>

          {newEventNotification && <div className='notification-dot'></div>}
        </div>

        {/* Profile Section */}
        <div className='profile-section'>
          <button
            className='profile-picture-button'
            onClick={handleProfileClick}
            aria-label='Show profile options'
          >
            <img
              className='profile-picture3'
              src={profilePicture}
              alt='Profile'
            />
          </button>
          <span className='profile-name'>Elon Musk</span>
        </div>
      </div>

      {/* Notification Popup */}
      {notificationVisible && newEventNotification && (
        <div className='notification-popup'>
          <div className='notification-header'>New Event Added</div>
          <div className='notification-content'>
            <p>
              <strong>Event Title:</strong> {newEventNotification.title}
            </p>
            <p>
              <strong>Date:</strong> {newEventNotification.date.toDateString()}
            </p>
          </div>
        </div>
      )}

      {/* Profile Options Dropdown */}
      {profileMenuVisible && (
        <div className='profile-menu'>
          <button className='profile-menu-item' onClick={handleGoToGrade}>
            <FiBarChart className='profile-menu-icon' />
            <span>View Grades</span>
          </button>
          <button className='profile-menu-item' onClick={handleGoToProfile}>
            <FiUser className='profile-menu-icon' />
            <span>Go to Profile</span>
          </button>
          <button className='profile-menu-item' onClick={handleLogout}>
            <FiLogOut className='profile-menu-icon' />
            <span>Logout</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;
