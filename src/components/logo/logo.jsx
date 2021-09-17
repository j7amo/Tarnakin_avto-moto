import React from 'react';
import logo from '../../assets/img/logo.svg';
import styles from './logo.module.scss';

function Logo() {
  return (
    <a href="/" className={styles['logo']}>
      <img src={logo} alt="Логотип Авто-Мото" />
    </a>
  );
}

export default Logo;
