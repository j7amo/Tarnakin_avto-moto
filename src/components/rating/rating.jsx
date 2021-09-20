import React from 'react';
import PropTypes from 'prop-types';
import styles from './rating.module.scss';
import Star from '../star/star';
import { nanoid } from 'nanoid';

const STAR_COUNT = 5;

function Rating({ rating }) {
  return (
    <div className={styles['rating']}>
      {new Array(STAR_COUNT).fill('').map((star, index) => (
        <Star
          key={nanoid()}
          fill={index <= rating - 1 ? '#D12136' : '#BDBEC2'}
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
