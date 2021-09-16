import React from 'react';
import PropTypes from 'prop-types';
import CenteringContainer from '../centering-container/centering-container';
import NavigationLink from '../navigation-link/navigation-link';
import {nanoid} from 'nanoid';

function MainFooter({ footerLinks }) {
  return (
    <footer>
      <CenteringContainer>
        <ul>
          {footerLinks.map(({linkTitle, href}) => (
            <li key={nanoid()}>
              <NavigationLink linkTitle={linkTitle} href={href}/>
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
