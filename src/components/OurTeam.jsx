import React from 'react';
import pp1 from '../assets/pp1.png';
import pp2 from '../assets/pp2.png';
import pp3 from '../assets/pp3.png';
import './ourTeam.css';

const OurTeam = () => {
  return (
    <div className='ourTeamFrame'>
      <div className='ourTeamFrameBackground' />
      <h2 className='ourTeamTitle'>Our Team</h2>
      <p className='ourTeamDescription'>
        Courses are developed by the Department Of Computer Science, Faculty of
        Applied Sciences of the University of Sri Jayewardenepura in
        collaboration with industry professionals. This endeavor is administered
        by the Centre for Open and Distance Learning, University of Sri
        Jayewardenepura and sponsored by ShehanZ Coding.
      </p>
      <div className='teamContainer'>
        {/* Team Member 1 */}
        <div className='teamMember'>
          <img
            className='profileImage'
            alt='Thisara Shehan Kavinda'
            src={pp1}
          />
          <div className='memberName'>Thisara Shehan Kavinda</div>
        </div>

        {/* Team Member 2 */}
        <div className='teamMember'>
          <img className='profileImage' src={pp2} alt='' />
          <div className='memberName'>Ruchira Jayasena</div>
        </div>

        {/* Team Member 3 */}
        <div className='teamMember'>
          <img className='profileImage' alt='Kavindu Hansana' src={pp3} />
          <div className='memberName'>Kavindu Hansana</div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
