import React from 'react';
import PropTypes from 'prop-types';
import CenteringContainer from '../centering-container/centering-container';
import NavigationLink from '../navigation-link/navigation-link';
import { nanoid } from 'nanoid';
import styles from './main-footer.module.scss';

function MainFooter({ footerLinks }) {
  return (
    <footer className={styles['main-footer']}>
      <CenteringContainer>
        <ul className={styles['additional-site-navigation']}>
          {footerLinks.map(({ linkTitle, href }) => (
            <li key={nanoid()}>
              <NavigationLink linkTitle={linkTitle} href={href} />
            </li>
          ))}
        </ul>
      </CenteringContainer>
    </footer>
  );
}

MainFooter.propTypes = {
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      linkTitle: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};

export default MainFooter;
