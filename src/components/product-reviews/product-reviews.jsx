import React from 'react';
import styles from './product-reviews.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const getRatingsTextForm = (productRating) => {
  switch (productRating) {
    case 1:
      return 'Ну и лажа!';
    case 2:
      return 'Не советует';
    case 3:
      return 'Советует';
    case 4:
      return 'Рекомендует';
    case 5:
      return 'Настоятельно рекомендует';
    default:
      break;
  }
};

function ProductReviews({ productReviews }) {
  return (
    <ul className={styles['reviews']}>
      {productReviews.map(
        ({
          author,
          advantages,
          disadvantages,
          comment,
          rating,
          reviewDate,
        }) => (
          <li key={nanoid()} className={styles['review']}>
            <h3 className={styles['review__author']}>{author}</h3>
            <dl className={styles['review__main-points']}>
              <div
                className={`${styles['review__main-point']} ${styles['review__main-point--advantages']}`}
              >
                <dt className={styles['review__point-name']}>Достоинства</dt>
                <dd className={styles['review__point-value']}>{advantages}</dd>
              </div>
              <div
                className={`${styles['review__main-point']} ${styles['review__main-point--disadvantages']}`}
              >
                <dt className={styles['review__point-name']}>Недостатки</dt>
                <dd className={styles['review__point-value']}>
                  {disadvantages}
                </dd>
              </div>
              <div
                className={`${styles['review__main-point']} ${styles['review__main-point--comment']}`}
              >
                <dt className={styles['review__point-name']}>Комментарий</dt>
                <dd className={styles['review__point-value']}>{comment}</dd>
              </div>
            </dl>
            <div className={styles['review__rating']}>
              <span className={styles['review__stars-rating']}>{rating}</span>
              <span className={styles['review__text-rating']}>
                {getRatingsTextForm(rating)}
              </span>
            </div>
            <div className={styles['review__meta']}>
              <div className={styles['review__date']}>{reviewDate}</div>
              <a className={styles['review__answer']} href='#'>Ответить</a>
            </div>
          </li>
        ),
      )}
    </ul>
  );
}

ProductReviews.propTypes = {
  productReviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      advantages: PropTypes.string,
      disadvantages: PropTypes.string,
      comment: PropTypes.string,
      rating: PropTypes.number,
      reviewDate: PropTypes.string,
    }),
  ),
};

export default ProductReviews;
