import React from 'react';
import dithmi from '../assets/dithmi.png';
import kanuja from '../assets/kanuja.png';
import shavini from '../assets/shavini.png';
import './industrySay.css';

const IndustrySay = () => {
  return (
    <div className='industry'>
      <div className='industryChild' />
      <div className='whatIndustrySays'>What Industry Says?</div>
      <div className='team'>
        <div className='person person1'>
          <img className='profilePic' alt='Shavini Dissanayake' src={shavini} />
          <b className='name'>Shavini Dissanayake</b>
          <div className='position'>Managing Director at ABCD Lanka Ltd</div>
          <div className='quote'>
            &quot;The ICT industry offers a unique promise for our economic
            resurgence. ICT skills are a vital component to realize it. Sri
            Jayewardenepura University&apos;s Open Learning Platform is a
            one-of-a-kind solution to bridge the skills gap in the
            industry.&quot;
          </div>
        </div>
        <div className='person person2'>
          <img className='profilePic' alt='Kanuja Dilshan' src={kanuja} />
          <b className='name'>Kanuja Dilshan</b>
          <div className='position'>Managing Director at ABCD Lanka Ltd</div>
          <div className='quote'>
            &quot;The ICT industry offers a unique promise for our economic
            resurgence. ICT skills are a vital component to realize it. Sri
            Jayewardenepura University&apos;s Open Learning Platform is a
            one-of-a-kind solution to bridge the skills gap in the
            industry.&quot;
          </div>
        </div>
        <div className='person person3'>
          <img className='profilePic' alt='Dithmi Lakrandi' src={dithmi} />
          <b className='name'>Dithmi Lakrandi</b>
          <div className='position'>Managing Director at ABCD Lanka Ltd</div>
          <div className='quote'>
            &quot;The ICT industry offers a unique promise for our economic
            resurgence. ICT skills are a vital component to realize it. Sri
            Jayewardenepura University&apos;s Open Learning Platform is a
            one-of-a-kind solution to bridge the skills gap in the
            industry.&quot;
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySay;
