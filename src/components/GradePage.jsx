import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './gradePage.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const GradePage = () => {
  const [graphType, setGraphType] = useState('bar');
  const [predictionInput, setPredictionInput] = useState('');
  const [predictedGrade, setPredictedGrade] = useState(null);

  // Mock data
  const courses = [
    { course: 'FrontEnd Development', grade: 850 },
    { course: 'Web Development', grade: 780 },
    { course: 'Mobile Application Development', grade: 920 },
    { course: 'Programming In Python', grade: 890 },
    { course: 'Cloud development', grade: 960 },
  ];

  const labels = courses.map((course) => course.course);

  const totalGrades = courses.reduce((acc, curr) => acc + curr.grade, 0);

  // Data for the graph
  const data = {
    labels,
    datasets: [
      {
        label: 'Grades',
        data: courses.map((course) => course.grade),
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#845EC2');
          gradient.addColorStop(1, '#FF6B6B');
          return gradient;
        },
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 10, // Rounded bars
        hoverBackgroundColor: '#FF9671',
        hoverBorderColor: '#FFC75F',
      },
    ],
  };

  const predictGrade = () => {
    const newGrade = parseInt(predictionInput, 10);
    if (!isNaN(newGrade)) {
      const newAverage = (
        (totalGrades + newGrade) /
        (courses.length + 1)
      ).toFixed(2);
      setPredictedGrade(newAverage);
    }
  };

  // Chart.js options for a modern look
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        displayColors: false,
        padding: 10,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#845EC2',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        grid: {
          display: false, // Hide grid lines
        },
      },
      y: {
        ticks: {
          color: '#333',
          font: {
            size: 14,
          },
        },
        grid: {
          borderDash: [5, 5], // Dashed grid lines
          color: '#ddd',
        },
      },
    },
  };

  // Toggle between bar and curve graphs
  const toggleGraphType = () => {
    setGraphType(graphType === 'bar' ? 'line' : 'bar');
  };

  return (
    <div className='grade-page'>
      <h1 className='main-title'>Courses I Am Taking</h1>

      {/* Table */}
      <div className='table-container'>
        <table className='grades-table'>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade (out of 1000)</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr
                key={course.course}
                className={index % 2 === 0 ? 'row-grey' : 'row-white'}
              >
                <td>{course.course}</td>
                <td>{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Graph Section */}
      <div className='graph-section'>
        <h2 className='section-title'>Performance Overview</h2>
        <div className='graph-container'>
          {graphType === 'bar' ? (
            <Bar data={data} options={options} />
          ) : (
            <Line
              data={{
                ...data,
                datasets: [
                  {
                    ...data.datasets[0],
                    fill: true,
                    backgroundColor: 'rgba(132, 94, 194, 0.2)', // Add gradient under line
                    borderColor: '#845EC2',
                    borderWidth: 3,
                    pointBackgroundColor: '#FF6B6B',
                    pointRadius: 6,
                    tension: 0.4, // Smooth curves
                  },
                ],
              }}
              options={options}
            />
          )}
        </div>
        <button className='toggle-graph-btn' onClick={toggleGraphType}>
          Toggle to {graphType === 'bar' ? 'Curve Graph' : 'Bar Graph'}
        </button>
      </div>

      {/* Grade Prediction Tool */}
      <div className='statistics-section'>
        <h2 className='section-title'>Grade Prediction Tool</h2>
        <div className='prediction-input-container'>
          <input
            type='number'
            className='prediction-input'
            placeholder='Enter hypothetical grade'
            value={predictionInput}
            onChange={(e) => setPredictionInput(e.target.value)}
          />
          <button className='toggle-graph-btn' onClick={predictGrade}>
            Predict Average
          </button>
        </div>
        {predictedGrade && (
          <p className='prediction-result'>
            Predicted Average Grade: {predictedGrade} / 1000
          </p>
        )}
      </div>

      {/* Additional Statistical Tools */}
      <div className='statistics-section'>
        <h2 className='section-title'>Advanced Statistics</h2>
        <div className='statistics-tools'>
          <div className='stat-card'>
            <h3>Average Grade</h3>
            <p>
              {(
                courses.reduce((acc, curr) => acc + curr.grade, 0) /
                courses.length
              ).toFixed(2)}{' '}
              / 1000
            </p>
          </div>
          <div className='stat-card'>
            <h3>Top Performing Course</h3>
            <p>
              {
                courses.reduce((max, curr) =>
                  curr.grade > max.grade ? curr : max
                ).course
              }
            </p>
          </div>
          <div className='stat-card'>
            <h3>Weakest Course</h3>
            <p>
              {
                courses.reduce((min, curr) =>
                  curr.grade < min.grade ? curr : min
                ).course
              }
            </p>
          </div>
        </div>
      </div>

      {/* Engagement Section */}
      <div className='engagement-section'>
        <h2 className='section-title'>Engage With Your Courses</h2>
        <p>
          Get insights, track your progress, and compare your performance with
          peers!
        </p>
        <button className='cta-btn'>Join Study Groups</button>
        <button className='cta-btn'>View Personalized Tips</button>
      </div>
    </div>
  );
};

export default GradePage;
