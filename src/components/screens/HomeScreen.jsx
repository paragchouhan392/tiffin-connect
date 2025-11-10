import React from 'react';
import './HomeScreen.css';

function HomeScreen() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Delicious Home-Cooked<br />Meals, Delivered Daily</h1>
        <p>Connect with trusted tiffin services in your area. Fresh, homemade food delivered to your doorstep every day.</p>
        <div className="hero-buttons">
          <button className="find-button">Find Tiffin Services <span>🔍</span></button>
          <button className="list-button">List Your Tiffin Service <span>→</span></button>
        </div>
      </div>
      
      {/* decorative SVG wave at bottom */}
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0, 60 C 220, 90 440, 90 720 ,70 C 1000, 50 1220, 40 1440, 60 L 1440, 120 L 0 ,120 Z" fill="#ffffff" />;

          {/* <path d="M0,32 C220,120 440,120 720,88 C1000,56 1220,0 1440,48 L1440,120 L0,120 Z" fill="#ffffff" /> */}
        </svg>
      </div>
    </div>
  );
}

export default HomeScreen;