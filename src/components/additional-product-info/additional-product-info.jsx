import React from 'react';
import PropTypes from 'prop-types';

function AdditionalProductInfo({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

AdditionalProductInfo.propTypes = {
  children: PropTypes.node,
};

export default AdditionalProductInfo;
