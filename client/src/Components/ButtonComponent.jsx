import React, { useState } from 'react';
import './ButtonComponent.css'; 

const ButtonComponent = () => {
  const [hoveredButton, setHoveredButton] = useState('');

  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton('');
  };

  const handleCrmClick = () => {
    // Use window.location.href for external redirects
    window.location.href = 'https://crm.officesahayogi.com/';
  };

  return (
    <div className="outer-div">
      <div className="button-container">
        <button
         // onMouseEnter={() => handleMouseEnter('CRM')}
         // onMouseLeave={handleMouseLeave}
          onClick={handleCrmClick}  // Fix typo here and set the click handler
        >
          CRM
        </button>
        <button
          onMouseEnter={() => handleMouseEnter('Payroll')}
          onMouseLeave={handleMouseLeave}
        >
          Payroll
        </button>
        <button
          onMouseEnter={() => handleMouseEnter('Ecommerce/website')}
          onMouseLeave={handleMouseLeave}
        >
          Ecommerce/website
        </button>
        <button
          onMouseEnter={() => handleMouseEnter('ERP/Account')}
          onMouseLeave={handleMouseLeave}
        >
          ERP/Account
        </button>
      </div>
      {hoveredButton && (
        <div className="hover-message">
          Website under the development process on {hoveredButton} Functionality.
        </div>
      )}
    </div>
  );
};

export default ButtonComponent;


