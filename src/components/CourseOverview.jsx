import React from 'react';
import { FaCode, FaJsSquare, FaLaptopCode, FaPython } from 'react-icons/fa';
import courseBanner from '../assets/Course Banner.png';
import './courseOverview.css';
import ProgressBar from './ProgressBar';

const CourseOverview = () => {
  const courses = [
    {
      title: 'Programming in Python - 1. Python for Beginners',
      progress: 25,
      icon: <FaPython />,
    },
    {
      title: 'Advanced JavaScript - 2. ES6 and Beyond',
      progress: 75,
      icon: <FaJsSquare />,
    },
    {
      title: 'Data Structures - 3. Intermediate',
      progress: 50,
      icon: <FaCode />,
    },
    {
      title: 'Full Stack Developer Bootcamp',
      progress: 100,
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <div id='course-overview' className='course-overview-container'>
      <h2 className='course-overview-title'>📚 Course Overview</h2>
      <div className='course-cards'>
        {courses.map((course, index) => (
          <div
            key={index}
            className='course-card-modern'
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className='course-image-container'>
              <img
                className='course-image-modern'
                src={courseBanner}
                alt={course.title}
              />
              <div className='course-icon'>{course.icon}</div>
            </div>
            <div className='course-content-modern'>
              <h3 className='course-title-modern'>{course.title}</h3>
              <p className='course-subtitle-modern'>
                Trainee - Full Stack Developer
              </p>
              <ProgressBar progress={course.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOverview;
