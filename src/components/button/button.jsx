import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, disabled, children }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

export default Button;
