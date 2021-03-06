import React from 'react';
import PropTypes from 'prop-types';
import { StarSize, StarFillColor } from '../../const';

function Star({ width = StarSize.WIDTH_SMALL, height = StarSize.HEIGHT_SMALL, fill = StarFillColor.INACTIVE}) {
  return (
    <svg width={width} height={height} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill={fill} fillOpacity="1"/>
    </svg>
  );
}

Star.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default Star;
