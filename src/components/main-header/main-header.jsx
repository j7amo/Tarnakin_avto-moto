import React from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import CenteringContainer from '../centering-container/centering-container';
import NavigationLink from '../navigation-link/navigation-link';

function MainHeader({ headerLinks }) {
  return (
    <header>
      <CenteringContainer>
        <nav>
          <Logo />
          <ul>
            {headerLinks.map(({linkTitle, href}) => (
              <li key={nanoid()}>
                <NavigationLink linkTitle={linkTitle} href={href}/>
              </li>))}
          </ul>
        </nav>
      </CenteringContainer>
    </header>
  );
}

MainHeader.propTypes = {
  headerLinks: PropTypes.arrayOf(PropTypes.shape({
    linkTitle: PropTypes.string,
    href: PropTypes.string,
  })),
};

export default MainHeader;
