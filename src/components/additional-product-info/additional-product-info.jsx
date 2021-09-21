import React, { useState } from 'react';
import styles from './additional-product-info.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ProductTechnicalDetails from '../product-technical-details/product-technical-details';
import ProductReviews from '../product-reviews/product-reviews';
import Contacts from '../contacts/contacts';
import { ContactType } from '../../const';

const productTechnicalDetails = [
  {
    name: 'Трансмиссия',
    value: 'Роботизированная',
  },
  {
    name: 'Мощность двигателя, л.с.',
    value: '249',
  },
  {
    name: 'Тип двигателя',
    value: 'Бензиновый',
  },
  {
    name: 'Привод',
    value: 'Полный',
  },
  {
    name: 'Объем двигателя, л',
    value: '2.4',
  },
  {
    name: 'Макс. крутящий момент',
    value: '370/4500',
  },
  {
    name: 'Количество цилиндров',
    value: '4',
  },
];

const contacts = [
  {
    name: 'Адрес',
    value: 'Санкт-Петербург,\nнабережная реки Карповки, дом 5',
    type: ContactType.TEXT,
  },
  {
    name: 'Режим работы',
    value: 'Ежедневно, с 10:00 до 21:00',
    type: ContactType.TEXT,
  },
  {
    name: 'Телефон',
    value: '8 (800) 333-55-99',
    type: ContactType.PHONE,
  },
  {
    name: 'E-mail',
    value: 'info@avto-moto.ru',
    type: ContactType.EMAIL,
  },
];

const getComponentByActiveTab = (tab) => {
  switch (tab) {
    case 'Характеристики':
      return (
        <ProductTechnicalDetails
          productTechnicalDetails={productTechnicalDetails}
        />
      );
    case 'Отзывы':
      return <ProductReviews />;
    case 'Контакты':
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
