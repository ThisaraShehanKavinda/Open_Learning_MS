import { motion } from 'framer-motion';
import React from 'react';
import { FaBookOpen, FaChalkboardTeacher, FaComments } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/usjp logo.png';
import '../get-started/getStarted.css';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Welcome');
  };

  return (
    <div className='get-started-body'>
      <div className='get-started-containerget'>
        <div className='background-animation'>
          <div className='circle circle-1'></div>
          <div className='circle circle-2'></div>
          <div className='circle circle-3'></div>
        </div>

        <motion.div
          className='header-sectionget'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} alt='USJP Logo' className='usjp-logoget' />
          <h1 className='header-titleget'>Open Learning Platform</h1>
          <p className='header-subtitleget'>
            University of Sri Jayewardenepura
          </p>
        </motion.div>

        <div className='features-section'>
          <motion.div
            className='feature-card'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaChalkboardTeacher className='feature-icon' />
            <h3>Interactive Lectures</h3>
            <p>
              Experience world-class teaching through engaging online sessions
              designed for students of all disciplines.
            </p>
          </motion.div>

          <motion.div
            className='feature-card'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaBookOpen className='feature-icon' />
            <h3>Comprehensive Materials</h3>
            <p>
              Access a wide range of curated content, from eBooks to quizzes,
              tailored to your learning needs.
            </p>
          </motion.div>

          <motion.div
            className='feature-card'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaComments className='feature-icon' />
            <h3>Collaborative Community</h3>
            <p>
              Connect with peers and educators through vibrant discussion forums
              and support systems.
            </p>
          </motion.div>
        </div>

        <motion.div
          className='cta-sectionget'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className='cta-buttonget' onClick={handleGetStarted}>
            Get Started <IoMdRocket className='cta-iconget' />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;
