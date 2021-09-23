import React, { useState } from 'react';
import styles from './additional-product-info.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ProductTechnicalDetails from '../product-technical-details/product-technical-details';
import ProductReviews from '../product-reviews/product-reviews';
import Contacts from '../contacts/contacts';
import { TabName } from '../../const';
import { productTechnicalDetails, contacts} from '../../mocks/mocks';

const getComponentByActiveTab = (tab) => {
  switch (tab) {
    case TabName.TECH_DETAILS:
      return (
        <ProductTechnicalDetails
          productTechnicalDetails={productTechnicalDetails}
        />
      );
    case TabName.REVIEWS:
      return <ProductReviews />;
    case TabName.CONTACTS:
      return <Contacts contacts={contacts} />;
    default:
      break;
  }
};

function AdditionalProductInfo({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={styles['info']}>
      <header className={styles['info__header']}>
        <ul
          className={styles['info__items']}
          onClick={(evt) => tabs.includes(evt.target.textContent) ? setActiveTab(evt.target.textContent) : ''}
        >
          {tabs.map((item) => (
            <li key={nanoid()}>
              <a
                href="#"
                className={
                  item === activeTab
                    ? `${styles['info__item']} ${styles['info__item--active']}`
                    : styles['info__item']
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </header>
      {getComponentByActiveTab(activeTab)}
    </div>
  );
}

AdditionalProductInfo.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
};

export default AdditionalProductInfo;
