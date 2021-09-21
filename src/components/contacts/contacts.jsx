import React from 'react';
import styles from './contacts.module.scss';
import globalStyles from '../app/app.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactType } from '../../const';
import MapContainer from '../map-container/map-container';

const getElementBasedOnType = (contactType, value) => {
  switch (contactType) {
    case ContactType.TEXT:
      return value;
    case ContactType.PHONE:
      return (
        <a href={`tel:${value.replaceAll(/[-() ]/g, '')}`}>
          <span className={globalStyles['visually-hidden']}>
            Позвоните нам!
          </span>
          {value}
        </a>
      );
    case ContactType.EMAIL:
      return (
        <a href={`mailto:${value}`}>
          <span className={globalStyles['visually-hidden']}>
            Напишите нам!
          </span>
          {value}
        </a>
      );
    default:
      break;
  }
};

function Contacts({ contacts }) {
  return (
    <div className={styles['contacts']}>
      <dl className={styles['contacts__list']}>
        {contacts.map(({ name, value, type }) => (
          <div key={nanoid()} className={styles['contacts__item']}>
            <dt className={styles['contacts__name']}>{name}</dt>
            <dd className={styles['contacts__value']}>
              {getElementBasedOnType(type, value)}
            </dd>
          </div>
        ))}
      </dl>
      <MapContainer />
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
};

export default Contacts;
