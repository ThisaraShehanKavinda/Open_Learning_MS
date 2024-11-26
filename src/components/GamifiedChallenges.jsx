import React from 'react';
import { FaCertificate, FaCrown, FaMedal, FaTrophy } from 'react-icons/fa';
import challengeImage from '../assets/challenge-banner.png'; // Replace with your image
import './GamifiedChallenges.css';

const GamifiedChallenges = () => {
  const challenges = [
    {
      title: 'JavaScript Coding Quiz',
      deadline: '3 Days Left',
      rewards: ['Badge', 'Discount Coupon'],
      progress: 80,
    },
    {
      title: 'Python Problem Solving',
      deadline: '6 Days Left',
      rewards: ['Certificate', 'Trophy'],
      progress: 60,
    },
    {
      title: 'React UI Design Challenge',
      deadline: '1 Day Left',
      rewards: ['Medal', 'Certificate'],
      progress: 95,
    },
  ];

  const leaderboard = [
    { name: 'Nimal', score: 950, rank: 1 },
    { name: 'Kamal', score: 890, rank: 2 },
    { name: 'Sunil', score: 870, rank: 3 },
  ];

  return (
    <div className='gamified-challenges'>
      <h2 className='section-title'>Gamified Challenges</h2>

      <div className='challenges-container'>
        {challenges.map((challenge, index) => (
          <div key={index} className='challenge-card'>
            <img
              src={challengeImage}
              alt={challenge.title}
              className='challenge-image'
            />
            <div className='challenge-details'>
              <h3 className='challenge-title'>{challenge.title}</h3>
              <p className='challenge-deadline'>{challenge.deadline}</p>
              <div className='reward-icons'>
                {challenge.rewards.includes('Badge') && (
                  <FaMedal className='reward-icon' />
                )}
                {challenge.rewards.includes('Certificate') && (
                  <FaCertificate className='reward-icon' />
                )}
                {challenge.rewards.includes('Trophy') && (
                  <FaTrophy className='reward-icon' />
                )}
                {challenge.rewards.includes('Discount Coupon') && (
                  <FaCrown className='reward-icon' />
                )}
              </div>
              <div className='progress-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${challenge.progress}%` }}
                ></div>
              </div>
              <p className='progress-text'>{challenge.progress}% Completed</p>
            </div>
          </div>
        ))}
      </div>

      <div className='leaderboard'>
        <h3 className='leaderboard-title'>Leaderboard</h3>
        <div className='leaderboard-table'>
          {leaderboard.map((entry, index) => (
            <div key={index} className='leaderboard-row'>
              <p className='leaderboard-rank'>#{entry.rank}</p>
              <p className='leaderboard-name'>{entry.name}</p>
              <p className='leaderboard-score'>{entry.score} pts</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamifiedChallenges;
