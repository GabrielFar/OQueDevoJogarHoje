import React, { useState } from 'react';
import './styles.css';

export default function PopUp ({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="popup-container">
      <button onClick={() => setIsOpen(!isOpen)} className="popup-trigger">
        {trigger}
      </button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};