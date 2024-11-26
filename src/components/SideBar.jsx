import React from 'react';
import { useNavigate } from 'react-router-dom';
import calendarIcon from '../assets/Calendar-Icon.svg';
import dashboardIcon from '../assets/Dashboard-Icon.svg';
import expandIcon from '../assets/Expand_right.svg';
import myCoursesIcon from '../assets/Group.svg';
import sidebarHeader from '../assets/sideBar-Header.png';
import siteHomeIcon from '../assets/SiteHome-Icon.svg';
import usjpLogo from '../assets/usjp logo.png';
import './sideBar.css';

// Reusable Sidebar Item Component
const SidebarItem = ({
  icon,
  label,
  isActive,
  onClick,
  onKeyDown,
  ariaLabel,
  role = 'button',
  tabIndex = 0,
}) => (
  <div
    className={`sidebar-item ${isActive ? 'selected' : ''}`}
    onClick={onClick}
    onKeyDown={onKeyDown}
    role={role}
    tabIndex={tabIndex}
    aria-label={ariaLabel}
  >
    <img
      src={icon}
      alt={`${label} Icon`}
      className={`sidebar-icon ${isActive ? 'selected-icon' : ''}`}
    />
    <span className={`sidebar-text ${isActive ? 'selected-text' : ''}`}>
      {label}
    </span>
  </div>
);

const SideBar = ({ activeMenu, setActiveMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleCoursesDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsDropdownOpen(false); // Close dropdown on menu selection
  };

  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const navigate = useNavigate();

  return (
    <div className='sidebar'>
      <div className='sidebar-header-section'>
        <img
          src={sidebarHeader}
          alt='Sidebar Header'
          className='sidebar-header-img'
        />
        <img src={usjpLogo} alt='USJP Logo' className='usjp-logo' />
      </div>

      <div className='sidebar-content'>
        {/* Sidebar Menu Items */}
        <SidebarItem
          icon={dashboardIcon}
          label='Dashboard'
          isActive={activeMenu === 'dashboard'}
          onClick={() => handleMenuClick('dashboard')}
          onKeyDown={(e) =>
            handleKeyDown(e, () => handleMenuClick('dashboard'))
          }
          ariaLabel='Go to Dashboard'
        />

        <SidebarItem
          icon={siteHomeIcon}
          label='Site Home'
          isActive={activeMenu === 'siteHome'}
          onClick={() => handleMenuClick('siteHome')}
          onKeyDown={(e) => handleKeyDown(e, () => handleMenuClick('siteHome'))}
          ariaLabel='Navigate to Site Home'
        />

        <SidebarItem
          icon={calendarIcon}
          label='Calendar'
          isActive={activeMenu === 'calendar'}
          onClick={() => handleMenuClick('calendar')}
          onKeyDown={(e) => handleKeyDown(e, () => handleMenuClick('calendar'))}
          ariaLabel='Go to Calendar'
        />

        {/* My Courses Dropdown */}
        <div
          className={`sidebar-item expandable ${isDropdownOpen ? 'selected' : ''}`}
          onClick={toggleCoursesDropdown}
          onKeyDown={(e) => handleKeyDown(e, toggleCoursesDropdown)}
          role='button'
          tabIndex={0}
          aria-expanded={isDropdownOpen}
          aria-label='Toggle My Courses'
        >
          <img
            src={myCoursesIcon}
            alt='My Courses Icon'
            className={`sidebar-icon ${isDropdownOpen ? 'selected-icon' : ''}`}
          />
          <span className='sidebar-text'>My Courses</span>
          <img
            src={expandIcon}
            alt='Expand Icon'
            className={`expand-icon ${isDropdownOpen ? 'rotated' : ''}`}
          />
        </div>

        {/* Courses Dropdown */}
        {isDropdownOpen && (
          <div className='courses-dropdown'>
            <SidebarItem
              icon={myCoursesIcon}
              label='Programming in Python '
              isActive={activeMenu === 'course'}
              onClick={() => navigate('/course')}
              onKeyDown={(e) => handleKeyDown(e, () => navigate('/course'))}
              ariaLabel='Programming in Python'
              role='button'
              tabIndex={0}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
