import React, { useRef } from 'react';
import CareerPath from '../../components/CareerPath';
import FeaturedCourses from '../../components/FeaturedCourses';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IndustrySay from '../../components/IndustrySay';
import MainContent from '../../components/MainContent';
import OurTeam from '../../components/OurTeam';
import SlideText from '../../components/SlideText';
import Sponsors from '../../components/Sponsors';

const Intro = () => {
  // Create refs for scrolling
  const careerPathRef = useRef(null);
  const featuredCoursesRef = useRef(null); // Reference for FeaturedCourses section

  return (
    <div>
      {/* Pass featuredCoursesRef to Header */}
      <Header featuredCoursesRef={featuredCoursesRef} />
      <MainContent
        careerPathRef={careerPathRef}
        featureCoursesRef={featuredCoursesRef}
      />
      <SlideText />
      <div ref={careerPathRef}>
        <CareerPath />
      </div>
      <OurTeam />
      <div ref={featuredCoursesRef}>
        <FeaturedCourses />
      </div>
      <IndustrySay />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Intro;
