import React from 'react';
import communication from '../assets/communication.png';
import projectManagement from '../assets/learnProject.png';
import python from '../assets/python.png';
import register from '../assets/register.png';
import technicalSkill from '../assets/technicalSkill.png';
import webDesign from '../assets/webDesign.png';
import './featuredCourses.css';

const FeaturedCourses = () => {
  return (
    <div className='featuredCourses'>
      <div className='featuredCoursesHeader'>
        <h2>Featured Courses</h2>
        <p>
          Start learning; Upon completion you will receive a certificate from
          University of Sri Jayewardenepura.
        </p>
      </div>
      <div className='coursesGrid'>
        <div className='courseCard'>
          <img src={register} alt='Project Management' />
          <h3>How to get start?</h3>
        </div>
        <div className='courseCard'>
          <img src={projectManagement} alt='Project Management' />
          <h3>Learn Project Management</h3>
        </div>
        <div className='courseCard'>
          <img src={technicalSkill} alt='Technical Skill' />
          <h3>Technical Skill</h3>
        </div>
        <div className='courseCard'>
          <img src={webDesign} alt='Web Design' />
          <h3>Web Design For Beginners</h3>
        </div>
        <div className='courseCard'>
          <img src={python} alt='Python' />
          <h3>Python For Beginners</h3>
        </div>
        <div className='courseCard'>
          <img src={communication} alt='Communication Skill' />
          <h3>Communication Skill</h3>
        </div>
      </div>
      <div className='seeAllCourses'>
        <button className='viewCoursesButton'>See All Courses</button>
      </div>
    </div>
  );
};

export default FeaturedCourses;
