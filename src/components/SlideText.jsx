import React, { useEffect, useState } from 'react';
import './slideText.css';

const SlideText = () => {
  const [textIndex, setTextIndex] = useState(0);

  const slideTextData = [
    {
      title: 'How Can I Enter The IT Industry?',
      description:
        'This Open Learning Platform provides you multiple learning paths for different careers in IT. All courses are fully online and self-paced to access at your convenience. They consist of practical exercises curated by the industry and academia to develop the required skills.',
    },
    {
      title: 'How Can I Start My Project Management Career?',
      description:
        'The "Project Management Skills" Programme equips you with a broad knowledge base to begin your career in Project Management. All courses are fully online and self-paced to access at your convenience. The programme is aligned with the Certified Associate in Project Management (CAPM) Exam Content Outline of the Project Management Institute, USA.',
    },
  ];

  // Switch text every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % slideTextData.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='info-frame'>
      <div className='content-wrapper'>
        <div className='text-slider'>
          <div className='text-slide'>
            <h2 className='title'>{slideTextData[textIndex].title}</h2>
            <p className='description'>
              {slideTextData[textIndex].description}
            </p>
          </div>
        </div>

        <div className='button-group'>
          <button className='learn-more-btn'>
            <span className='btn-text'>Learn More</span>
          </button>
          <button className='how-to-register-btn'>
            <span className='btn-text'>How To Register</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideText;
