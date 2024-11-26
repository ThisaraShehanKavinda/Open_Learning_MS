import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaBell, FaPlus, FaTimes } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TaskAutomationPanel.css';

const TaskAutomationPanel = () => {
  const [calendarView, setCalendarView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', date: new Date() });
  const [errorMessage, setErrorMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
    setErrorMessage('');
  };

  const handleSaveTask = () => {
    if (!newTask.title.trim()) {
      setErrorMessage('Task title cannot be empty.');
      setShowNotification(true);
      toast.error('Task title cannot be empty!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    if (!newTask.date) {
      setErrorMessage('Please select a date for the task.');
      setShowNotification(true);
      toast.error('Please select a date for the task.', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    const newTasksList = [...tasks, newTask];
    setTasks(newTasksList);
    setFormVisible(false);
    setNewTask({ title: '', date: new Date() }); // Reset form

    toast.success('Task saved successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });
  };

  // Notification and reminders
  useEffect(() => {
    const checkForReminders = () => {
      const now = new Date();
      tasks.forEach((task) => {
        if (new Date(task.date) < now && !task.reminded) {
          toast.warn(`Reminder: Task "${task.title}" is overdue!`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
          task.reminded = true; // Mark as reminded
        } else if (new Date(task.date) - now <= 86400000 && !task.reminded) {
          // 24 hours before
          toast.info(`Reminder: Task "${task.title}" is due tomorrow!`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
          task.reminded = true;
        }
      });
    };

    const timer = setInterval(checkForReminders, 60000); // Check every minute
    return () => clearInterval(timer);
  }, [tasks]);

  const getTileClassName = ({ date }) => {
    const dayTasks = tasks.filter(
      (task) => task.date.toDateString() === date.toDateString()
    );
    return dayTasks.length > 0 ? 'task-day' : '';
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
    const dayTasks = tasks.filter(
      (task) => task.date.toDateString() === date.toDateString()
    );
    if (dayTasks.length > 0) {
      setNewTask({ title: dayTasks[0].title, date });
    } else {
      setNewTask({ title: '', date });
    }
    toggleForm();
  };

  return (
    <div className='task-container'>
      <div className='task-header'>
        <h2>Task Automation Panel</h2>
        <p>Stay organized with your learning tasks and deadlines.</p>
        <select
          className='view-dropdown'
          value={calendarView}
          onChange={(e) => setCalendarView(e.target.value)}
        >
          <option value='month'>Month View</option>
          <option value='week'>Week View</option>
          <option value='year'>Year View</option>
        </select>
        <button className='add-task-btn' onClick={toggleForm}>
          <FaPlus /> Add New Task
        </button>
      </div>

      <div className='task-main'>
        <div className='main-calendar'>
          <Calendar
            view={calendarView}
            onChange={setSelectedDate}
            onClickDay={handleDayClick}
            value={selectedDate}
            tileClassName={getTileClassName}
          />
        </div>

        {isFormVisible && (
          <div className='task-form-overlay'>
            <div className='task-form'>
              <h3>New Task</h3>
              <button className='close-btn' onClick={toggleForm}>
                <FaTimes />
              </button>
              <input
                type='text'
                placeholder='Task Title'
                className='task-title-input'
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
              />
              <input
                type='date'
                className='task-date-input'
                value={newTask.date.toISOString().split('T')[0]}
                onChange={(e) =>
                  setNewTask({ ...newTask, date: new Date(e.target.value) })
                }
              />
              <button className='save-btn' onClick={handleSaveTask}>
                Save Task
              </button>
            </div>
          </div>
        )}

        <div className='task-list'>
          <h3>Upcoming Tasks</h3>
          {tasks
            .filter((task) => new Date(task.date) >= new Date())
            .map((task, index) => (
              <div className='task-item' key={index}>
                <div className='task-info'>
                  <h4>{task.title}</h4>
                  <p>{task.date.toDateString()}</p>
                </div>
                <FaBell size={20} />
              </div>
            ))}
        </div>
      </div>

      {showNotification && (
        <div className='error-notification'>
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Add ToastContainer for toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default TaskAutomationPanel;
