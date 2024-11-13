import React from 'react';
import logo1 from '../../assets/Logo1.png';
import logo2 from '../../assets/Logo2.png';
import logo3 from '../../assets/Logo3.png';
import usjplogo from '../../assets/usjp logo.png';
import './getStarted.css';

const GetStarted = () => {
  return (
    <div>
      <div className='container'>
        <div className='background-gradient' />
        <img className='usjp-logo' src={usjplogo} alt='usjLogo' />
        <div className='header-text'>OPEN LEARNING PLATFORM - USJP</div>
        <div className='get-started-btn'>
          <div className='btn-background'>
            <div className='btn-text'>Get Started</div>
          </div>
        </div>

        <div className='card-left'>
          <div className='card-inner'>
            <div className='card-shadow-1' />
            <div className='card-shadow-2' />
          </div>
          <div className='circle logo-circle-1' />
          <img className='logo-img-1' src={logo3} alt='logo3' />
          <div className='text-primary'>
            Comprehensive <br /> Learning Resources
          </div>
          <div className='text-secondary'>
            Video Lectures: High-quality, on-demand video content that students
            can watch at their own pace.
            <br />
            Downloadable Resources: Course materials such as slides, PDFs,
            e-books, and supplementary documents.
            <br />
            Interactive Quizzes and Assignments: Regular assessments to
            reinforce learning and provide instant feedback on progress.
          </div>
        </div>
        <div className='card-right'>
          <div className='card-inner'>
            <div className='card-shadow-1' />
            <div className='card-shadow-2' />
          </div>
          <div className='circle logo-circle-2' />
          <img className='logo-img-2' src={logo2} alt='logo2' />
          <div className='text-primary'>
            Flexible and Personalized <br /> Learning Experience
          </div>
          <div className='text-secondary'>
            Self-paced Learning: Students can learn at their own speed,
            revisiting materials as needed.
            <br />
            Progress Tracking: Dashboards that help students track their
            progress, set goals, and stay motivated.
            <br />
            Customizable Learning Paths: Options for students to choose courses
            that align with their interests and career goals.
          </div>
        </div>
        <div className='card-third'>
          <div className='card-inner'>
            <div className='card-shadow-1' />
            <div className='card-shadow-2' />
          </div>
          <div className='circle logo-circle-3' />
          <img className='logo-img-3' src={logo1} alt='logo1' />
          <div className='text-primary'>Community and Support</div>
          <div className='text-secondary'>
            Discussion Forums: Spaces for students to ask questions, share
            knowledge, and collaborate with peers.
            <br />
            Live Sessions and Webinars: Opportunities to interact with
            instructors and industry experts in real-time.
            <br />
            Support Services: Access to technical support, academic counseling,
            and peer mentoring to ensure a smooth learning experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
