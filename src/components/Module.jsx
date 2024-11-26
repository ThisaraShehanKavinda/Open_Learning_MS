import React, { useState } from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import './Module.css';

const Module = ({ module, onQuizCompletion }) => {
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);
  const [materialsReviewed, setMaterialsReviewed] = useState(false);

  const handleStartQuiz = () => {
    if (videoWatched && materialsReviewed) {
      setIsQuizActive(true);
    } else {
      alert('Please watch the video and review the materials first.');
    }
  };

  const handleQuizCompletion = (score) => {
    onQuizCompletion(module.id, score);
    setIsQuizActive(false);
  };

  return (
    <div className={`module-card ${module.isUnlocked ? '' : 'locked'}`}>
      <div className='module-card-header'>
        <h3>{module.title}</h3>
        {module.isUnlocked ? (
          <FaLockOpen className='icon unlocked-icon' />
        ) : (
          <FaLock className='icon locked-icon' />
        )}
      </div>

      <div className='module-card-body'>
        <p>{module.description}</p>
      </div>

      <div className='module-card-content'>
        <div className='video-sec'>
          <h4>Video Lecture</h4>
          <iframe
            width='320'
            height='240'
            src='https://www.youtube.com/embed/rfscVS0vtbw'
            title='Python Tutorial for Beginners'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <button
            className='mark-watched-btn'
            onClick={() => setVideoWatched(true)}
            disabled={videoWatched}
          >
            {videoWatched ? 'Watched' : 'Mark as Watched'}
          </button>
        </div>

        <div className='materials-section'>
          <h4>Course Materials</h4>
          <button
            className='review-materials-btn'
            onClick={() => setMaterialsReviewed(true)}
            disabled={materialsReviewed}
          >
            {materialsReviewed ? 'Reviewed' : 'Review Materials (PDF)'}
          </button>
        </div>
      </div>

      <div className='module-card-footer'>
        {module.isUnlocked ? (
          <>
            <button
              className='quiz-btn'
              onClick={handleStartQuiz}
              disabled={isQuizActive}
            >
              {isQuizActive ? 'Quiz Active' : 'Take Quiz'}
            </button>
            {isQuizActive && (
              <Quiz
                moduleId={module.id}
                onQuizCompletion={handleQuizCompletion}
              />
            )}
          </>
        ) : (
          <button className='quiz-btn disabled' disabled>
            Locked
          </button>
        )}
      </div>
    </div>
  );
};

const Quiz = ({ moduleId, onQuizCompletion }) => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5'],
      correct: '4',
    },
    {
      id: 2,
      question: 'What is 5 + 3?',
      options: ['7', '8', '6'],
      correct: '8',
    },
    {
      id: 3,
      question: 'What is 9 - 6?',
      options: ['7', '3', '6'],
      correct: '3',
    },
  ];

  const handleOptionChange = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    const correctAnswers = questions.reduce((acc, q) => {
      return acc + (answers[q.id] === q.correct ? 1 : 0);
    }, 0);

    const percentageScore = (correctAnswers / questions.length) * 100;
    setScore(percentageScore);
    onQuizCompletion(percentageScore); // Notify parent
  };

  return (
    <div className='quiz-popup'>
      <h4>Quiz for Module {moduleId}</h4>
      {questions.map((q) => (
        <div key={q.id} className='quiz-question'>
          <p>{q.question}</p>
          <div className='options'>
            {q.options.map((option) => (
              <label key={option}>
                <input
                  type='radio'
                  name={`question-${q.id}`}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={() => handleOptionChange(q.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
      {score !== null && (
        <div className='quiz-score'>
          <p>Your score: {score}%</p>
        </div>
      )}
    </div>
  );
};

export default Module;
