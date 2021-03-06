import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './rating.module.scss';
import Star from '../star/star';
import { nanoid } from 'nanoid';
import { setRating } from '../../store/action';
import { connect } from 'react-redux';
import {getModalRating} from '../../store/selectors';
import { STAR_COUNT, StarFillColor, StarSize } from '../../const';

function Rating({ rating, modalRating, onRatingChange, isClickable = false }) {
  const [hover, setHover] = useState(modalRating);

  const handleRatingButtonClick = (index) => {
    onRatingChange(index + 1);
  };

  return (
    <div className={styles['rating']}>
      {new Array(STAR_COUNT).fill('').map((star, index) =>
        isClickable ? (
          <button
            key={nanoid()}
            type="button"
            className={styles['button']}
            onClick={() => handleRatingButtonClick(index)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          >
            <Star
              width={StarSize.WIDTH_BIG}
              height={StarSize.HEIGHT_BIG}
              fill={
                index < hover || index <= modalRating - 1
                  ? StarFillColor.ACTIVE
                  : StarFillColor.INACTIVE
              }
            />
          </button>
        ) : (
          <Star
            key={nanoid()}
            fill={
              index <= rating - 1
                ? StarFillColor.ACTIVE
                : StarFillColor.INACTIVE
            }
          />
        ),
      )}
    </div>
  );
}

Rating.propTypes = {
  modalRating: PropTypes.number,
  rating: PropTypes.number,
  onRatingChange: PropTypes.func,
  isClickable: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  modalRating: getModalRating(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRatingChange(rating) {
    dispatch(setRating(rating));
  },
});

const ConnectedRating = connect(mapStateToProps, mapDispatchToProps)(Rating);

export default ConnectedRating;
