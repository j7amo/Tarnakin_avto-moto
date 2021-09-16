import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import Button from '../button/button';

function Card({ productInfo }) {
  const {
    productName,
    mainTechnicalDetails,
    newPrice,
    oldPrice,
  } = productInfo;

  return (
    <div>
      <h2>{productName}</h2>
      <ul>
        {mainTechnicalDetails.map(({name, type}) => (
          <li key={nanoid()} className={type}>
            {name}
          </li>
        ))}
      </ul>
      <div>
        <span>{newPrice}</span>
        <span>{oldPrice}</span>
      </div>
      <Button>
        Оставить заявку
      </Button>
      <Button>
        В кредит от 11 000 Р
      </Button>
    </div>
  );
}

Card.propTypes = {
  productInfo: PropTypes.shape({
    productName: PropTypes.string,
    mainTechnicalDetails: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
    })),
    newPrice: PropTypes.number,
    oldPrice: PropTypes.number,
  }),
};

export default Card;
