import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactType } from '../../const';

const getElementBasedOnType = (contactType, value) => {
  switch (contactType) {
    case ContactType.TEXT:
      return value;
    case ContactType.PHONE:
      return <a href={`tel:${value.replaceAll(/[-() ]/g, '')}`}>{value}</a>;
    case ContactType.EMAIL:
      return <a href={`mailto:${value}`}>{value}</a>;
    default:
      break;
  }
};

function Contacts({ contacts }) {
  return (
    <div>
      <dl>
        {contacts.map(({ name, value, type }) => (
          <div key={nanoid()}>
            <dt>{name}</dt>
            <dd>{getElementBasedOnType(type, value)}</dd>
          </div>
        ))}
      </dl>
      <div>Здесь будет карта!</div>
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
