import React from 'react';
import './Button.css';

const Button = ({ variant = 'primary', icon, children, onClick, type = 'button' }) => {
  return (
    <button 
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
