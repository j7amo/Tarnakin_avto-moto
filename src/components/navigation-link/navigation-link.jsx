import React from 'react';
import PropTypes from 'prop-types';

function NavigationLink({ linkTitle, href }) {
  return <a href={href}>{linkTitle}</a>;
}

NavigationLink.propTypes = {
  linkTitle: PropTypes.string,
  href: PropTypes.string,
};

export default NavigationLink;
