import React from 'react';
import logo from '../../assets/img/logo.svg';

function Logo() {
  return(
    <a href='/'>
      <img src={logo} alt='Логотип Авто-Мото'/>
    </a>
  );
}

export default Logo;
