import React from 'react';
import styles from './product-reviews.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Button from '../button/button';
import { connect } from 'react-redux';
import { setViewStatus } from '../../store/action';
import Rating from '../rating/rating';
import {getReviews} from '../../store/selectors';
import { RatingValue } from '../../const';

const getRatingsTextForm = (productRating) => {
  switch (productRating) {
    case 1:
      return RatingValue.HORRIBLE;
    case 2:
      return RatingValue.NOT_ADVISABLE;
    case 3:
      return RatingValue.ADVISABLE;
    case 4:
      return RatingValue.RECOMMENDED;
    case 5:
      return RatingValue.STRONGLY_RECOMMENDED;
    default:
      break;
  }
};

function ProductReviews({ productReviews, onReviewButtonClick }) {
  return (
    <div className={styles['reviews']}>
      <Button modifier="secondary" onClick={() => onReviewButtonClick(true)}>
        Оставить отзыв
      </Button>
      <ul className={styles['reviews__list']}>
        {productReviews.map(
          ({
            author,
            advantages,
            disadvantages,
            comment,
            rating,
            reviewDate,
          }) => (
            <li
              key={nanoid()}
              className={`${styles['reviews__item']} ${styles['review']}`}
            >
              <h3 className={styles['review__author']}>{author}</h3>
              <dl className={styles['review__main-points']}>
                <div
                  className={`${styles['review__main-point']} ${styles['review__main-point--advantages']}`}
                >
                  <dt className={styles['review__point-name']}>Достоинства</dt>
                  <dd className={styles['review__point-value']}>
                    {advantages}
                  </dd>
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
                <span className={styles['review__stars-rating']}>
                  <Rating rating={rating} />
                </span>
                <span className={styles['review__text-rating']}>
                  {getRatingsTextForm(rating)}
                </span>
              </div>
              <div className={styles['review__meta']}>
                <div className={styles['review__date']}>{reviewDate}</div>
                <span className={styles['review__answer']}>Ответить</span>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
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
  onReviewButtonClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  productReviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  onReviewButtonClick(status) {
    dispatch(setViewStatus(status));
  },
});

const ConnectedProductReviews = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductReviews);

export default ConnectedProductReviews;
