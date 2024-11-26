import React, { useEffect, useRef, useState } from 'react';
import './progressBar.css';

const ProgressBar = ({ progress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div className='progress-bar-card' ref={progressRef}>
      <div className='progress-bar-container'>
        <div
          className='progress-bar-bg'
          style={{
            width: isVisible ? `${progress}%` : '0%',
          }}
        ></div>
      </div>
      <div className='progress-bar-text'>{progress}% Complete</div>
    </div>
  );
};

export default ProgressBar;
