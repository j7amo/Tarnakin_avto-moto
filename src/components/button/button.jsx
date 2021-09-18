import React from 'react';
import styles from './button.module.scss';
import PropTypes from 'prop-types';

function Button({ modifier, onClick, disabled, children }) {
  const combinedClassName = styles[`button--${modifier}`];
  return (
    <button
      className={`${styles['button']} ${combinedClassName}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  modifier: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

export default Button;
