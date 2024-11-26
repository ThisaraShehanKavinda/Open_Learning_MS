import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CalendarComponent from './components/CalendarComponent';
import CoursePage from './components/CoursePage';
import GradePage from './components/GradePage';
import Profile from './components/Profile';
import GetStarted from './pages/get-started/GetStarted';
import Home from './pages/home/Home';
import Intro from './pages/intro/Intro';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import SiteHome from './pages/site Home/SiteHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GetStarted />} />
        <Route path='/Welcome' element={<Intro />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/calendar' element={<CalendarComponent />} />
        <Route path='/sitehome' element={<SiteHome />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/gradePage' element={<GradePage />} />
        <Route path='/course' element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
