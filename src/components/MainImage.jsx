import React from 'react';
import backgroundimage from '../assets/Background image.png';
import './mainImage.css';

const MainImage = () => {
  return (
    <div className='imagecontainer'>
      <img className='image' src={backgroundimage} alt='Placeholder' />
    </div>
  );
};

export default MainImage;
