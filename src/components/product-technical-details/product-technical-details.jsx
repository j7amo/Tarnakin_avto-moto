import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ProductTechnicalDetails({ productTechnicalDetails }) {
  return (
    <div>
      <dl>
        {productTechnicalDetails.map(({ name, value }) => (
          <div key={nanoid()}>
            <dt>{name}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

ProductTechnicalDetails.propTypes = {
  productTechnicalDetails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

export default ProductTechnicalDetails;
