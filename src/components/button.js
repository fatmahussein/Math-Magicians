import './button.css';
import React from 'react';

function Button({ symbol, color }) {
  return (
    <div className="btn-wrapper" style={{ backgroundColor: color }}>
      {symbol}
    </div>
  );
}

export default Button;
