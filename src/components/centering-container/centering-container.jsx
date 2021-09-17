import React from 'react';
import styles from './centering-container.module.scss';
import PropTypes from 'prop-types';

function CenteringContainer({ children }) {
  return <div className={styles['container']}>{children}</div>;
}

CenteringContainer.propTypes = {
  children: PropTypes.node,
};

export default CenteringContainer;
