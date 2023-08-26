import './button.css';
import React from 'react';
import PropTypes from 'prop-types';

function Button({ symbol, color , onClick}) { 
  return (
    <button className="btn-wrapper" type='button' onClick={onClick} style={{ backgroundColor: color }}>
      {symbol}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: '',
  onClick: () => {},
};

export default Button;
