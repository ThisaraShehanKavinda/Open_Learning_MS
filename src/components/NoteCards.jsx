import React from 'react';
import './noteCards.css';

const NoteCards = () => {
  return (
    <div className='note-cards-container'>
      <div className='headerNoteCard'>
        <h1 className='titleNoteCard'>
          Would you like to enter the IT industry?
        </h1>
        <div className='underline'></div>
        <p className='subtitleNoteCard'>
          You can obtain an industry recognized qualification free of charge
          from the University of Sri Jayewardenepura.
        </p>
      </div>
      <div className='cardsNoteCard'>
        <div className='note-card'>
          <div className='card-content'>
            <h3 className='card-title'>
              BY UNIVERSITY OF <br /> Sri Jayewardenepura
            </h3>
            <p className='card-description'>
              Certificate program on full stack development. Upon completion,
              you will receive a certificate from the University of Moratuwa.
            </p>
          </div>
        </div>
        <div className='note-card'>
          <div className='card-content'>
            <h3 className='card-title'>EXPOSURE FOR SKILL DEVELOPMENT</h3>
            <p className='card-description'>
              An opportunity to develop your skills through practical exercises
              curated by the industry and academia.
            </p>
          </div>
        </div>
        <div className='note-card'>
          <div className='card-content'>
            <h3 className='card-title'>OPEN AND FREE ACCESS FOR ALL AGES</h3>
            <p className='card-description'>
              Self-paced online free learning materials that you can access at
              your convenience.
            </p>
          </div>
        </div>
        <div className='note-card'>
          <div className='card-content'>
            <h3 className='card-title'>BECOME AN INDUSTRY READY DEVELOPER</h3>
            <p className='card-description'>
              At the completion of this course, you can be an industry-ready
              full-stack web developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCards;
