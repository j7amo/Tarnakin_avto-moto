import React from 'react';
import styles from './card.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Button from '../button/button';

function Card({ productInfo }) {
  const { productName, mainTechnicalDetails, newPrice, oldPrice } = productInfo;

  return (
    <div className={styles['product-card']}>
      <h2 className={styles['product-card__title']}>{productName}</h2>
      <ul className={styles['product-card__details']}>
        {mainTechnicalDetails.map(({ name, type }) => {
          const combinedClassName =
            styles[`product-card__details-item--${type}`];
          return (
            <li
              key={nanoid()}
              className={`${styles['product-card__details-item']} ${combinedClassName}`}
            >
              {name}
            </li>
          );
        })}
      </ul>
      <div className={styles['product-card__prices']}>
        <span className={styles['product-card__new-price']}>
          {newPrice}
        </span>
        <span className={styles['product-card__old-price']}>
          {oldPrice}
        </span>
      </div>
      <div className={styles['product-card__button-container']}>
        <Button modifier="primary">Оставить заявку</Button>
        <Button modifier="secondary">В кредит от 11 000 Р</Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  productInfo: PropTypes.shape({
    productName: PropTypes.string,
    mainTechnicalDetails: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
      }),
    ),
    newPrice: PropTypes.string,
    oldPrice: PropTypes.string,
  }),
};

export default Card;
