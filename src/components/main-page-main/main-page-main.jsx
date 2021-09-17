import React from 'react';
import PropTypes from 'prop-types';

function MainPageMain({ children }) {
  return <main>{children}</main>;
}

MainPageMain.propTypes = {
  children: PropTypes.node,
};

export default MainPageMain;
