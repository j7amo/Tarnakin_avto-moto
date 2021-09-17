import React from 'react';
import PropTypes from 'prop-types';

function CenteringContainer({ children }) {
  return <div>{children}</div>;
}

CenteringContainer.propTypes = {
  children: PropTypes.node,
};

export default CenteringContainer;
