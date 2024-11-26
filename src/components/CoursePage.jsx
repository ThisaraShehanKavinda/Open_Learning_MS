import React, { useEffect, useState } from 'react';
import { FaCertificate, FaTrophy } from 'react-icons/fa';
import CertificationSection from './CertificationSection';
import './CoursePage.css';
import Module from './Module';

const CoursePage = () => {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: 'Python for Beginners',
      description: 'Learn the basics of Python programming.',
      isUnlocked: true,
      isCompleted: false,
      score: 0,
    },
    ...Array.from({ length: 9 }, (_, i) => ({
      id: i + 2,
      title: `Module ${i + 2}`,
      description: `Dive deeper into advanced Python concepts.`,
      isUnlocked: false,
      isCompleted: false,
      score: 0,
    })),
  ]);

  const [finalExam, setFinalExam] = useState({
    isUnlocked: false,
    isCompleted: false,
    score: 0,
  });

  const [overallScore, setOverallScore] = useState(0);
  const [badge, setBadge] = useState(null);

  const [showFinalExam, setShowFinalExam] = useState(false);
  const [examScore, setExamScore] = useState(0);

  const handleQuizCompletion = (moduleId, score) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId
          ? { ...module, isCompleted: true, score }
          : module
      )
    );

    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId + 1 ? { ...module, isUnlocked: true } : module
      )
    );
  };

  const handleFinalExamSubmit = () => {
    if (examScore >= 80) {
      setFinalExam({ ...finalExam, isCompleted: true, score: examScore });
    }
    setShowFinalExam(false);
  };

  useEffect(() => {
    const totalModules = modules.length;

    const completedModules = modules.filter((module) => module.isCompleted);

    const completedPercentage = (completedModules.length / totalModules) * 100;
    setOverallScore(completedPercentage);

    if (completedModules.length === totalModules) {
      setFinalExam({ ...finalExam, isUnlocked: true });
    }

    const totalScore = completedModules.reduce(
      (sum, module) => sum + module.score,
      0
    );
    const averageScore = totalScore / completedModules.length || 0;

    if (averageScore >= 90) {
      setBadge('Gold Badge');
    } else {
      setBadge(null); // Reset badge if score drops below 90%
    }
  }, [modules]);

  return (
    <div className='course-page'>
      <header className='course-header'>
        <div className='course-intro'>
          <h1>Programming in Python</h1>
          <p>
            Dive into Python programming from basics to advanced concepts. Gain
            hands-on experience with real-world projects and unlock your
            programming potential.
          </p>
        </div>

        <div className='course-overall-score'>
          <h3>Overall Progress</h3>
          <p>{overallScore.toFixed(2)}%</p>{' '}
        </div>

        <div className='progress-bar-container'>
          <div className='progress-bar'>
            <div
              className='progress-bar-fill'
              style={{
                width: `${
                  (modules.filter((module) => module.isCompleted).length /
                    modules.length) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </header>

      <main>
        <section className='modules-section'>
          <h2>Modules</h2>
          <div className='modules-grid'>
            {modules.map((module) => (
              <Module
                key={module.id}
                module={module}
                onQuizCompletion={handleQuizCompletion}
              />
            ))}
          </div>
        </section>

        <section className='certification-section'>
          <h2>
            <FaCertificate className='icon certificate-icon' /> Certification
          </h2>
          <p>
            Complete all modules and pass the final exam to earn your
            certificate.
          </p>
          {finalExam.isUnlocked ? (
            <button className='exam-btn' onClick={() => setShowFinalExam(true)}>
              Take Final Exam
            </button>
          ) : (
            <button className='exam-btn disabled' disabled>
              Final Exam Locked
            </button>
          )}
          {badge && (
            <div className='badge'>
              <FaTrophy className='icon badge-icon' /> {badge}
            </div>
          )}
        </section>

        {showFinalExam && (
          <section className='final-exam'>
            <h3>Final Exam</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFinalExamSubmit();
              }}
            >
              {/* Example of 10 multiple choice questions */}
              {[
                {
                  question: 'What is the output of `print(2 * 3)` in Python?',
                  answers: [
                    { value: 100, text: '6' },
                    { value: 80, text: '23' },
                    { value: 60, text: 'None' },
                    { value: 40, text: 'Error' },
                  ],
                },
                {
                  question:
                    'Which of the following is used to define a function in Python?',
                  answers: [
                    { value: 100, text: 'def' },
                    { value: 80, text: 'func' },
                    { value: 60, text: 'function' },
                    { value: 40, text: 'method' },
                  ],
                },
                {
                  question: 'What does `len()` do in Python?',
                  answers: [
                    { value: 100, text: 'Returns the length of an object' },
                    { value: 80, text: 'Returns the type of an object' },
                    { value: 60, text: 'Calculates the size in bytes' },
                    { value: 40, text: 'Checks if an object is empty' },
                  ],
                },
                {
                  question:
                    'Which of the following is the correct way to create a list in Python?',
                  answers: [
                    { value: 100, text: '[1, 2, 3]' },
                    { value: 80, text: 'list{1, 2, 3}' },
                    { value: 60, text: 'list[1, 2, 3]' },
                    { value: 40, text: 'array(1, 2, 3)' },
                  ],
                },
                {
                  question: 'What is the result of `3 == 3` in Python?',
                  answers: [
                    { value: 100, text: 'True' },
                    { value: 80, text: 'False' },
                    { value: 60, text: 'None' },
                    { value: 40, text: 'Error' },
                  ],
                },
                {
                  question:
                    'Which keyword is used to handle exceptions in Python?',
                  answers: [
                    { value: 100, text: 'try' },
                    { value: 80, text: 'catch' },
                    { value: 60, text: 'except' },
                    { value: 40, text: 'error' },
                  ],
                },
                {
                  question:
                    'Which function is used to read input from the user in Python?',
                  answers: [
                    { value: 100, text: 'input()' },
                    { value: 80, text: 'read()' },
                    { value: 60, text: 'get_input()' },
                    { value: 40, text: 'scan()' },
                  ],
                },
                {
                  question:
                    'Which of the following is a valid Python data type?',
                  answers: [
                    { value: 100, text: 'Tuple' },
                    { value: 80, text: 'ListSet' },
                    { value: 60, text: 'Array' },
                    { value: 40, text: 'HashMap' },
                  ],
                },
                {
                  question: 'What does `str()` do in Python?',
                  answers: [
                    { value: 100, text: 'Converts an object to a string' },
                    { value: 80, text: 'Converts a string to an integer' },
                    { value: 60, text: 'Converts a string to a float' },
                    { value: 40, text: 'Converts an object to a list' },
                  ],
                },
                {
                  question:
                    'What will be the output of `print(5 / 2)` in Python 3.x?',
                  answers: [
                    { value: 100, text: '2.5' },
                    { value: 80, text: '2' },
                    { value: 60, text: '2.0' },
                    { value: 40, text: '3' },
                  ],
                },
              ].map((item, i) => (
                <div key={i} className='question'>
                  <label>{item.question}</label>
                  <select
                    onChange={(e) => setExamScore(Number(e.target.value))}
                    required
                  >
                    <option value='0'>Select Answer</option>
                    {item.answers.map((answer, index) => (
                      <option key={index} value={answer.value}>
                        {answer.text}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              <button type='submit'>Submit Exam</button>
            </form>
          </section>
        )}

        <CertificationSection
          isCertificateUnlocked={finalExam.isCompleted}
          userName='Elon Musk'
          courseName='Programming in Python'
          badge={badge}
        />
      </main>
    </div>
  );
};

export default CoursePage;
