import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Intro from './pages/intro/Intro'; // Your intro page
import SignIn from './pages/sign-in/SignIn'; // Sign-in page
import SignUp from './pages/sign-up/SignUp'; // Sign-up page

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path='/' element={<Intro />} /> {/* Home or intro page */}
        <Route path='/signin' element={<SignIn />} /> {/* Sign-in page */}
        <Route path='/signup' element={<SignUp />} /> {/* Sign-up page */}
      </Routes>
    </Router>
  );
}

export default App;
