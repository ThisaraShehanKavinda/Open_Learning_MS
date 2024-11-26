import React from 'react';
import MainImage from '../../components/MainImage';
import NoteCards from '../../components/NoteCards';
import Testimonials from '../../components/Testimonials';
import VideoDisplay from '../../components/VideoDisplay';

const SiteHome = () => {
  return (
    <div>
      <MainImage />
      <NoteCards />
      <VideoDisplay />
      <Testimonials />
    </div>
  );
};

export default SiteHome;
