import React, { useState } from 'react';
import './App.css'; // Ensure your CSS file contains the appropriate styles

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);

  // Toggle function for the collapsible section
  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <div className="app-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li className="active">Current Page</li>
        </ul>
      </nav>

      {/* Expandable Search Bar */}
      <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(false)}
        />
      </div>

      {/* Collapsible Sections */}
      <div className="collapsible-section">
        <button onClick={toggleCollapse}>
          {collapseOpen ? 'Hide Section' : 'Show Section'}
        </button>
        {collapseOpen && (
          <div className="collapse-content">
            <p>This is a collapsible section. Click the button to hide or show this content.</p>
          </div>
        )}
      </div>

      {/* Responsive Video Embed */}
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Custom Checkbox & Radio */}
      <div className="form-elements">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Custom Checkbox
        </label>
        <label className="custom-radio">
          <input type="radio" name="radio" />
          <span className="radiomark"></span>
          Custom Radio
        </label>
        <label className="custom-radio">
          <input type="radio" name="radio" />
          <span className="radiomark"></span>
          Custom Radio 2
        </label>
      </div>
    </div>
  );
};

export default App;
