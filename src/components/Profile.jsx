import {
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faCertificate, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRobot } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import DownloadButton from '../assets/Download Button.png';
import ProfilePhoto from '../assets/Profile Photo.png';
import './profile.css';

const ProfileComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Elon Musk',
    bio: "I'm a passionate software engineer with expertise in designing, developing, and deploying scalable and efficient solutions.",
    email: 'thisara2000@gmail.com',
    country: 'Sri Lanka',
    city: 'Kegalle',
    profilePhoto: ProfilePhoto,
  });

  const [portfolioProjects] = useState([
    {
      title: 'AI Chatbot',
      description: 'An AI-powered chatbot using GPT models.',
      tools: ['React.js', 'Python'],
      link: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A scalable e-commerce website.',
      tools: ['Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase projects.',
      tools: ['React.js', 'CSS'],
      link: '#',
    },
  ]);

  const certificates = [
    {
      name: 'Front-End Web Development',
      description: 'Web Development - 2. Front-End Web Development',
      date: 'June 13, 2024',
      code: '5hWPDOu7hm',
      imageUrl: 'path/to/your/certificate/image.jpg', // Add certificate image URL here
    },
    {
      name: 'Back-End Web Development',
      description: 'Web Development - 2. Back-End Web Development',
      date: 'August 25, 2024',
      code: '3rX8P2d9jh',
      imageUrl: 'path/to/your/certificate/image.jpg', // Add certificate image URL here
    },
    {
      name: 'Front-End Web Development',
      description: 'Web Development - 2. Front-End Web Development',
      date: 'June 13, 2024',
      code: '5hWPDOu7hm',
      imageUrl: 'path/to/your/certificate/image.jpg', // Add certificate image URL here
    },
    {
      name: 'Back-End Web Development',
      description: 'Web Development - 2. Back-End Web Development',
      date: 'August 25, 2024',
      code: '3rX8P2d9jh',
      imageUrl: 'path/to/your/certificate/image.jpg', // Add certificate image URL here
    },
    // Add more certificates as needed
  ];

  const [testimonials] = useState([
    {
      name: 'Thilina Wijesinghe',
      feedback: 'Fantastic work on our project!',
      role: 'Project Manager',
    },
    {
      name: 'Tharanga Srimal',
      feedback: 'Very professional and skilled.',
      role: 'Team Lead',
    },
    {
      name: 'Kavindi Kahatapitiya',
      feedback: 'Very professional and skilled.',
      role: 'Team Lead',
    },
    {
      name: 'Saraya samindi',
      feedback: 'Very professional and skilled.',
      role: 'Team Lead',
    },
    {
      name: 'Shamiru Lakhan',
      feedback: 'Very professional and skilled.',
      role: 'Team Lead',
    },
    {
      name: 'Adeesha Uddeptha',
      feedback: 'Very professional and skilled.',
      role: 'Team Lead',
    },
  ]);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({
          ...prevData,
          profilePhoto: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [bioText, setBioText] = useState(
    'I specialize in full-stack development and have a keen interest in cloud computing and AI technologies. Passionate about solving complex problems and building scalable, efficient systems.'
  );

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleBioChange = (e) => {
    setBioText(e.target.value);
  };

  return (
    <div className='profile-container'>
      {/* Header Section */}
      <div className='profile-header'>
        <div className='profile-photo'>
          <img src={profileData.profilePhoto} alt='Profile' />
        </div>
        <div className='profile-info'>
          <h1>{profileData.name}</h1>
          <p>{profileData.bio}</p>
          <button className='edit-profile-btn' onClick={handleEditClick}>
            Edit Profile
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className='about-section'>
        <h2>
          About Me
          <button className='edit-btn' onClick={toggleEdit}>
            ✏️ Edit
          </button>
        </h2>
        {isEditing ? (
          <textarea
            className='about-input'
            value={bioText}
            onChange={handleBioChange}
            rows='6'
          />
        ) : (
          <p>{bioText}</p>
        )}
      </div>

      {/* Portfolio Section */}
      <div className='portfolio-section'>
        <h2>Portfolio Projects</h2>
        <div className='portfolio-grid'>
          {portfolioProjects.map((project, index) => (
            <div key={index} className='project-card'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Tools:</strong>
                <div className='tools'>
                  {project.tools.includes('React.js') && (
                    <FontAwesomeIcon
                      icon={faReact}
                      className='react-icon'
                      title='React.js'
                    />
                  )}
                  {project.tools.includes('Node.js') && (
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      className='node-icon'
                      title='Node.js'
                    />
                  )}
                  {project.tools.includes('Python') && (
                    <FontAwesomeIcon
                      icon={faPython}
                      className='python-icon'
                      title='Python'
                    />
                  )}
                  {/* Add other icons for more tools */}
                </div>
              </p>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Skills and Recommendations */}
      <div className='skills-section'>
        <h2>Skills</h2>
        <div className='skills-container'>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>Web Development</span>
          <span>Cloud Computing</span>
          <span>UI/UX Design</span>
        </div>
        <div className='recommendations'>
          <h3>
            <FontAwesomeIcon icon={faRobot} className='recommendation-icon' />
            AI-Powered Recommendations
          </h3>
          <p>
            Based on your skills, consider learning <strong>Docker</strong> or{' '}
            <strong>Kubernetes</strong> to enhance your cloud computing
            expertise.
          </p>
          <button className='explore-button'>Explore Now</button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='testimonials-sec'>
        <h2>What People Say</h2>
        <div className='testimonials-con'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='testimonial-car'>
              <div className='testimonial-con'>
                <i className='fas fa-quote-left testimonial-icon'></i>
                <p className='testimonial-text'>
                  &quot;{testimonial.feedback}&quot;
                </p>
              </div>
              <div className='testimonial-author'>
                <h4>
                  - {testimonial.name}, <span>{testimonial.role}</span>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Board Section */}
      <div className='vision-board-section'>
        <h2>Vision Board</h2>
        <div className='vision-board'>
          <div className='vision-item short-term'>
            <FontAwesomeIcon icon={faCertificate} className='vision-icon' />
            <h3>Short-Term Goal</h3>
            <p>Complete AWS Cloud Practitioner Certification</p>
          </div>
          <div className='vision-item long-term'>
            <FontAwesomeIcon icon={faUsersCog} className='vision-icon' />
            <h3>Long-Term Goal</h3>
            <p>Lead a team of developers at a cutting-edge AI firm</p>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className='certificates-section'>
        <h2>My Certificates</h2>
        <div className='certificate-grid'>
          {certificates.map((certificate, index) => (
            <div key={index} className='certificate-card'>
              <div className='certificate-image'>
                <img
                  className='download-icon'
                  src={DownloadButton}
                  alt='Download'
                  title='Download Certificate'
                />
              </div>
              <div className='certificate-info'>
                <h3>{certificate.name}</h3>
                <p>{certificate.description}</p>
                <p>Awarded on: {certificate.date}</p>
                <p>Code: {certificate.code}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Timeline */}
      <div className='activity-section'>
        <h2>Activity Timeline</h2>
        <ul>
          <li>
            <i className='fas fa-play-circle activity-icon' title='Started'></i>
            <span className='activity-text'>
              Started Python for Beginners - January 2024
            </span>
          </li>
          <li>
            <i
              className='fas fa-check-circle activity-icon'
              title='Completed'
            ></i>
            <span className='activity-text'>
              Completed Web Design for Beginners - February 2024
            </span>
          </li>
          <li>
            <i className='fas fa-award activity-icon' title='Awarded'></i>
            <span className='activity-text'>
              Awarded Front-End Web Development Certificate - June 2024
            </span>
          </li>
        </ul>
      </div>

      {/* Modal for Editing Profile */}
      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <form onSubmit={handleSubmit}>
              <h2>Edit Profile</h2>
              <label>
                Name:
                <input
                  type='text'
                  name='name'
                  value={profileData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Bio:
                <textarea
                  name='bio'
                  value={profileData.bio}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type='email'
                  name='email'
                  value={profileData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Country:
                <input
                  type='text'
                  name='country'
                  value={profileData.country}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                City/Town:
                <input
                  type='text'
                  name='city'
                  value={profileData.city}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Profile Photo:
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                />
              </label>
              <div className='modal-buttons'>
                <button type='submit'>Save</button>
                <button type='button' onClick={handleModalClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
