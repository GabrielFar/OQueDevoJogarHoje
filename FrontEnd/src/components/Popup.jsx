import React, { useState } from 'react';
import './styles.css';

export default function PopUp ({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="popup-container">
      <div onClick={() => setIsOpen(!isOpen)} className="popup-trigger">
        {trigger}
      </div>

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