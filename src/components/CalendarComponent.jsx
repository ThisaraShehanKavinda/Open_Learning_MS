import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Line } from 'react-chartjs-2';
import { FaCalendarAlt } from 'react-icons/fa';
import './calendarComponent.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const CalendarComponent = ({ onNewEvent }) => {
  const [calendarView, setCalendarView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: new Date() });
  const [errorMessage, setErrorMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [weeklyData, setWeeklyData] = useState([]);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
    setErrorMessage('');
  };

  const handleSaveEvent = () => {
    if (!newEvent.title.trim()) {
      setErrorMessage('Event title cannot be empty.');
      setShowNotification(true);
      return;
    }

    if (!newEvent.date) {
      setErrorMessage('Please select a date for the event.');
      setShowNotification(true);
      return;
    }

    const newEventsList = [...events, newEvent];
    setEvents(newEventsList);

    // Notify the parent component
    if (onNewEvent) {
      onNewEvent(newEvent.title, newEvent.date);
    }

    setFormVisible(false);
    setNewEvent({ title: '', date: new Date() }); // Reset form
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  useEffect(() => {
    const processWeeklyData = () => {
      let data = Array(7).fill(0); // Initialize an array for 7 days of the week (Sunday-Saturday)
      events.forEach((event) => {
        const day = event.date.getDay(); // Get the day of the week (0 - 6)
        data[day]++;
      });
      setWeeklyData(data);
    };

    const processDailyData = () => {
      const dailyEvents = [];
      events.forEach((event) => {
        const day = event.date.toDateString();
        if (!dailyEvents[day]) dailyEvents[day] = [];
        dailyEvents[day].push(event);
      });
    };

    processWeeklyData();
    processDailyData();
  }, [events]);

  const getTileClassName = ({ date }) => {
    const dayEvents = events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
    return dayEvents.length > 0 ? 'event-day' : '';
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
    const dayEvents = events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
    if (dayEvents.length > 0) {
      setNewEvent({ title: dayEvents[0].title, date });
    } else {
      setNewEvent({ title: '', date });
    }
    toggleForm();
  };

  const weeklyHeatmapData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Activity Level',
        data: weeklyData,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='calendar-container'>
      <div className='calendar-header'>
        <select
          className='view-dropdown'
          value={calendarView}
          onChange={(e) => setCalendarView(e.target.value)}
        >
          <option value='month'>Month View</option>
          <option value='week'>Week View</option>
          <option value='year'>Year View</option>
        </select>
        <button className='add-event-btn' onClick={toggleForm}>
          + Add New Event
        </button>
      </div>

      <div className='calendar-main'>
        <div className='main-calendar'>
          <Calendar
            view={calendarView}
            onChange={setSelectedDate}
            onClickDay={handleDayClick}
            value={selectedDate}
            tileClassName={getTileClassName}
          />
        </div>

        <div className='monthly-view-container'>
          <h3 className='monthly-overview-title'>Monthly Overview</h3>
          <div className='monthly-columns'>
            {[...Array(12)].map((_, month) => (
              <div className='monthly-column' key={month}>
                <div className='month-header'>
                  <h4 className='month-name'>
                    {new Date(0, month).toLocaleString('default', {
                      month: 'long',
                    })}
                  </h4>
                </div>
                {events
                  .filter((event) => event.date.getMonth() === month)
                  .map((event, index) => (
                    <div key={index} className='monthly-event-card'>
                      <div className='event-icon'>
                        <FaCalendarAlt size={20} />
                      </div>
                      <div className='event-details'>
                        <p className='event-title'>{event.title}</p>
                        <p className='event-date'>
                          {event.date.toDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Heatmap at the bottom */}
      <div className='weekly-heatmap'>
        <h4>Weekly Activity Heatmap</h4>
        <Line
          data={weeklyHeatmapData}
          options={{
            responsive: true,
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
                max: Math.max(...weeklyData) + 1,
              },
            },
            animation: {
              duration: 1000,
              easing: 'easeOutBounce',
            },
            plugins: {
              tooltip: {
                enabled: true,
                callbacks: {
                  label: function (tooltipItem) {
                    return `Activity: ${tooltipItem.raw} events`;
                  },
                },
              },
            },
          }}
        />
      </div>

      {isFormVisible && (
        <div className='event-form-overlay'>
          <div className='event-form'>
            <h2 className='form-title'>New Event</h2>
            <button className='close-btn' onClick={toggleForm}>
              ×
            </button>
            <input
              type='text'
              placeholder='Event Title'
              className='event-title-input'
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <input
              type='date'
              className='event-date-input'
              value={newEvent.date.toISOString().split('T')[0]}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: new Date(e.target.value) })
              }
            />
            <button className='save-btn' onClick={handleSaveEvent}>
              Save
            </button>
          </div>
        </div>
      )}

      {showNotification && (
        <div className='error-notification'>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
