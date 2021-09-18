import React from 'react';
import styles from './product-technical-details.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ProductTechnicalDetails({ productTechnicalDetails }) {
  return (
    <div className={styles['details']}>
      <dl className={styles['details__list']}>
        {productTechnicalDetails.map(({ name, value }) => (
          <div key={nanoid()} className={styles['details__item']}>
            <dt className={styles['details__name']}>{name}</dt>
            <dd className={styles['details__value']}>{value}</dd>
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
