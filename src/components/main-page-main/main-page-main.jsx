import React from 'react';
import PropTypes from 'prop-types';
import styles from './main-page-main.module.scss';

function MainPageMain({ children }) {
  return <main className={styles['main']}>{children}</main>;
}

MainPageMain.propTypes = {
  children: PropTypes.node,
};

export default MainPageMain;
