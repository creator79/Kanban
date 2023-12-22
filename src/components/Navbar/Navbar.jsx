// Navbar.jsx

import React, { useState } from 'react';
import filterIcon from '../../Assets/Images/Tuning.svg';
import downIcon from '../../Assets/Images/Down.svg';
import { useTheme } from '../../utils/ThemeContext';

import LightIcon from '../../Assets/Images/Light.png';
import DarkIcon from '../../Assets/Images/Dark.png';

import './Navbar.css';

export default function Navbar(props) {
  const [toggleFilter, setToggleFilter] = useState(false);
  const { isDarkTheme, toggleTheme } = useTheme();

  function handleDisplayToggle(e) {
    setToggleFilter(!toggleFilter);
    if (e.target.value !== undefined) {
      props.handleGroupValue(e.target.value);
    }
  }

  function handleOrderingValue(e) {
    setToggleFilter(!toggleFilter);
    if (e.target.value !== undefined) {
      props.handleOrderValue(e.target.value);
    }
  }

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <>
      <section className={`nav ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        <div className="nav-container">
          <div>
            <div className="nav-disp-btn" onClick={handleDisplayToggle}>
              <div className="nav-disp-icon nav-disp-filter">
                <img src={filterIcon} alt="icon" />
              </div>
              <div className="nav-disp-heading">Display</div>
              <div className="nav-disp-icon nav-disp-drop">
                <img src={downIcon} alt="icon" />
              </div>
            </div>
            <div
              className={`nav-disp-dropdown ${isDarkTheme ? 'dark-theme' : 'light-theme'} ${
                toggleFilter ? 'nav-disp-dropdown-show' : ''
              }`}
            >
              <div className="nav-disp-filters">
                <div className="nav-dropdown-category">Grouping</div>
                <div className="nav-dropdown-selector">
                  <select
                    value={props.groupValue}
                    onChange={handleDisplayToggle}
                    className={`nav-selector ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
                    name="grouping"
                    id=""
                  >
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
              </div>
              <div className="nav-disp-filters">
                <div className="nav-dropdown-category">Ordering</div>
                <div className="nav-dropdown-selector">
                  <select value={props.orderValue} onChange={handleOrderingValue} className="nav-selector" id="">
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="theme-toggle" onClick={handleThemeToggle}>
            <img src={isDarkTheme ?LightIcon  : DarkIcon} alt="Toggle Theme" style={{ height: '30px', width: '30px' }} />
          </div>
        </div>
      </section>
    </>
  );
}
