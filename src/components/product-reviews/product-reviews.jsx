import React from 'react';
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
    <div>
      <ul>
        {productReviews.map(
          ({
            author,
            advantages,
            disadvantages,
            comment,
            rating,
            reviewDate,
          }) => (
            <li key={nanoid()}>
              <h3>{author}</h3>
              <dl>
                <div>
                  <dt>Достоинства</dt>
                  <dd>{advantages}</dd>
                </div>
                <div>
                  <dt>Недостатки</dt>
                  <dd>{disadvantages}</dd>
                </div>
                <div>
                  <dt>Комментарий</dt>
                  <dd>{comment}</dd>
                </div>
              </dl>
              <div>
                <span>{rating}</span>
                <span>{getRatingsTextForm(rating)}</span>
              </div>
              <div>{reviewDate}</div>
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
};

export default ProductReviews;
