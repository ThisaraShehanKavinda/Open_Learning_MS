import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../../assets/Facebook F.png';
import googleIcon from '../../assets/Google.png';
import HeaderBackground from '../../assets/Header Background.svg';
import usjpLogo from '../../assets/usjp logo.png';
import './signUp.css';

const SignUp = () => {
  return (
    <div className='SignUpContainer'>
      <div className='Header'>
        <img className='HeaderBackground' src={HeaderBackground} alt='' />
        <div className='HeaderContent'>
          <img className='usjLogo' src={usjpLogo} alt='' />
          <h1 className='title'>OPEN LEARNING PLATFORM - USJP</h1>
        </div>
      </div>

      <div className='signupFormBackground'>
        <form className='signupForm'>
          <div className='signUpSection'>
            <div className='inputField'>
              <label htmlFor='fullName'>Full Name</label>
              <input
                type='text'
                id='fullName'
                placeholder='Enter your full name'
              />
            </div>
            <div className='inputField'>
              <label htmlFor='email'>Email Address</label>
              <input type='email' id='email' placeholder='Enter your email' />
            </div>
            <div className='inputField'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Enter your password'
              />
            </div>
            <div className='inputField'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                placeholder='Confirm your password'
              />
            </div>
            <button className='signUpBtn'>Sign Up</button>
          </div>

          <div className='separator'></div>

          <div className='signUpOtherOptions'>
            <label className='or' htmlFor='sign Up'>Or Sign Up with</label>
            <button className='socialBtn facebookBtn'>
              <img src={facebookIcon} alt='Facebook Icon' />
              Sign Up with Facebook
            </button>
            <button className='socialBtn googleBtn'>
              <img src={googleIcon} alt='Google Icon' />
              Sign Up with Google
            </button>
            <div className='signInPrompt'>
              <span>Already have an account?</span>
              <Link to='/signin' className='signInLink'>
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
