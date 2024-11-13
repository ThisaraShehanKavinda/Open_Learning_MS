import React from 'react';
import facebookIcon from '../../assets/Facebook F.png';
import googleIcon from '../../assets/Google.png';
import HeaderBackground from '../../assets/Header Background.svg';
import usjpLogo from '../../assets/usjp logo.png';
import './signIn.css';

const SignIn = () => {
  return (
    <div className='SignInContainer'>
      <div className='Header'>
        <img className='HeaderBackground' src={HeaderBackground} alt='' />
        <div className='HeaderContent'>
          <img className='usjLogo' src={usjpLogo} alt='' />
          <h1 className='title'>OPEN LEARNING PLATFORM - USJP</h1>
        </div>
      </div>

      <div className='signinFormBackground'>
        <form className='signinForm'>
          <div className='signInSection'>
            <div className='email'>
              <label htmlFor='email'>Email Address</label>
              <input type='email' id='email' placeholder='Enter your email' />
            </div>
            <div className='password'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Enter your password'
              />
            </div>
            <div className='forgotPassword'>
              <label htmlFor='forgotPassword'>Forgot password?</label>
            </div>
            <button className='signInBtn'>Sign In</button>
          </div>

          <div className='separator'></div>

          <div className='signInOtherOptions'>
            <label htmlFor='signIn'>Or Sign In with</label>
            <button className='socialBtn facebookBtn'>
              <img src={facebookIcon} alt='Facebook Icon' />
              Sign In with Facebook
            </button>
            <button className='socialBtn googleBtn'>
              <img src={googleIcon} alt='Google Icon' />
              Sign In with Google
            </button>
            <div className='signUpPrompt'>
              <span>Don&apos;t have an account?</span>
              <a href='/signup' className='signUpLink'>
                Sign Up
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
