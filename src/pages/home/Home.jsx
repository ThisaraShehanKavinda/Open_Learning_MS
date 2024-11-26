import React, { useState } from 'react';
import AIChatbot from '../../components/AIChatbot';
import CalendarComponent from '../../components/CalendarComponent';
import CourseOverview from '../../components/CourseOverview';
import GamifiedChallenges from '../../components/GamifiedChallenges';
import HomeHeader from '../../components/Home-Header';
import Sidebar from '../../components/SideBar';
import SocialFeed from '../../components/SocialFeed';
import Welcome from '../../components/Welcome';
import SiteHome from '../site Home/SiteHome';
import './home.css';

const Home = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [newEventNotification, setNewEventNotification] = useState(null);
  const handleNewEvent = (eventTitle, eventDate) => {
    setNewEventNotification({ title: eventTitle, date: eventDate });
  };

  return (
    <div className='home-container'>
      {/* Header Section */}
      <header className='home-header'>
        <HomeHeader newEventNotification={newEventNotification} />
      </header>

      {/* Sidebar Section */}
      <aside className='home-sidebar'>
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </aside>

      {/* Main Content Section */}
      <main className='home-main'>
        {activeMenu === 'dashboard' && (
          <>
            <Welcome />
            <CourseOverview />
            <GamifiedChallenges />
            <AIChatbot />
            <SocialFeed />
          </>
        )}
        {activeMenu === 'siteHome' && <SiteHome />}
        {activeMenu === 'calendar' && (
          <CalendarComponent onNewEvent={handleNewEvent} />
        )}
      </main>
    </div>
  );
};

export default Home;
