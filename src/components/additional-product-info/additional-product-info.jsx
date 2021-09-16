import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ProductTechnicalDetails from '../product-technical-details/product-technical-details';
import ProductReviews from '../product-reviews/product-reviews';
import Contacts from '../contacts/contacts';

const getComponentByActiveTab = (tab) => {
  switch(tab) {
    case 'Характеристики':
      return <ProductTechnicalDetails/>;
    case 'Отзывы':
      return <ProductReviews/>;
    case 'Контакты':
      return <Contacts/>;
    default:
      break;
  }
};

function AdditionalProductInfo({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <header>
        <ul onClick={(evt) => setActiveTab(evt.target.textContent)}>
          {tabs.map((item) => (
            <li key={nanoid()}>
              <a href="#">{item}</a>
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
