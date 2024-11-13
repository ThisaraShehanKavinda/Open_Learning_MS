import React from 'react';
import image1 from '../assets/image1.png';
import './mainContent.css';

const MainContent = ({ careerPathRef, featureCoursesRef }) => {
  // Scroll to the CareerPath component
  const scrollToCareerPath = () => {
    careerPathRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to the FeatureCourses component
  const scrollToFeatureCourses = () => {
    featureCoursesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='main-content'>
      <div className='main-text-container'>
        <h1 className='industry-ready-skills'>
          Industry-ready skills for a Professional Career
        </h1>
        <p className='free-of-charge'>
          Free of charge from the University of Sri Jayewardenepura
        </p>

        <div className='action-buttons'>
          <button className='recommend-btn' onClick={scrollToCareerPath}>
            <span className='recommend-btn-text'>Recommend a Career</span>
          </button>

          <button className='view-course-btn' onClick={scrollToFeatureCourses}>
            <span className='view-course-text'>View Course</span>
          </button>
        </div>
      </div>

      <img className='r81-image' alt='R81' src={image1} />
    </div>
  );
};

export default MainContent;
