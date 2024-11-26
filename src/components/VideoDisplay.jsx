import React from 'react';
import backgroundimage2 from '../assets/background image 2.png';
import './videoDisplay.css';

const VideoDisplay = () => {
  return (
    <div className='video-display-container'>
      <img
        className='backgroundimage2'
        src={backgroundimage2}
        alt='Background'
      />
      <div className='headervideo'>
        <h1 className='main-titlevideo'>
          Kick-start Your Career as a Software Developer
        </h1>
        <h2 className='sub-titlevideo'>
          with the Trainee Full Stack Developer Programme
        </h2>
      </div>
      <div className='descriptionvideo'>
        <p>
          This six-module programme will provide full-stack (end-to-end)
          software development exposure to learners. Upon successful completion
          of each module, participants will be given a certificate of
          participation. Prior qualification or experience is not required to
          register for these courses. Courses are developed by the Departments
          of Computer Science of the Faculty of Applied Sciences of the
          University of Sri Jayewardenepura in collaboration with Industry
          professionals. This endeavour is administered by the Centre for Open
          and Distance Learning, University of Sri Jayewardenepura and sponsored
          by ShehanZ Coding.
        </p>
      </div>
      <div className='video-section'>
        <iframe
          className='video-player'
          width='932'
          height='524'
          src='https://www.youtube.com/embed/04lLH1zkWv8'
          title='University Of Sri Jayewardenepura'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
      <div className='contact-info'>
        If you have any questions, you can reach us by sending an email to{' '}
        <a href='mailto:open@usjp.lk' className='email-link'>
          open@usjp.lk
        </a>
      </div>
    </div>
  );
};

export default VideoDisplay;
