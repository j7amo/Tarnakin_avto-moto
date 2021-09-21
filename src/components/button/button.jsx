import React from 'react';
import styles from './button.module.scss';
import globalStyles from '../app/app.module.scss';
import PropTypes from 'prop-types';

function Button({
  modifier,
  type = 'button',
  onClick,
  disabled = false,
  children,
}) {
  const combinedClassName = styles[`button--${modifier}`];
  switch (modifier) {
    case 'rounded-left':
      return (
        <button
          className={`${styles['button']} ${combinedClassName}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          <span className={globalStyles['visually-hidden']}>
            Нажмите для перехода к предыдущему изображению
          </span>
        </button>
      );
    case 'rounded-right':
      return (
        <button
          className={`${styles['button']} ${combinedClassName}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          <span className={globalStyles['visually-hidden']}>
            Нажмите для перехода к следующему изображению
          </span>
        </button>
      );
    default:
      return (
        <button
          className={`${styles['button']} ${combinedClassName}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
  }
}

Button.propTypes = {
  modifier: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

export default Button;
