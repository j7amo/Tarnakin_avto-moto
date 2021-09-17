import React from 'react';
import PropTypes from 'prop-types';
import styles from './navigation-link.module.scss';

function NavigationLink({ linkTitle, href }) {
  return (
    <a href={href} className={styles['navigation-link']}>
      {linkTitle}
    </a>
  );
}

NavigationLink.propTypes = {
  linkTitle: PropTypes.string,
  href: PropTypes.string,
};

export default NavigationLink;
