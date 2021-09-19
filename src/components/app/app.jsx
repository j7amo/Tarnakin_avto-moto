import React from 'react';
import styles from './app.module.scss';
import PropTypes from 'prop-types';
import MainHeader from '../main-header/main-header';
import MainFooter from '../main-footer/main-footer';
import MainPageMain from '../main-page-main/main-page-main';
import ProductInfo from '../product-info/product-info';
import ReviewModal from '../review-modal/review-modal';
import { connect } from 'react-redux';

const headerLinks = [
  {
    linkTitle: 'Автомобили',
    href: '#',
  },
  {
    linkTitle: 'Контакты',
    href: '#',
  },
  {
    linkTitle: 'Услуги',
    href: '#',
  },
  {
    linkTitle: 'Вакансии',
    href: '#',
  },
];

const footerLinks = [
  {
    linkTitle: 'Корпоративным клиентам',
    href: '#',
  },
  {
    linkTitle: 'Клиентам',
    href: '#',
  },
  {
    linkTitle: 'Аренда авто',
    href: '#',
  },
  {
    linkTitle: 'Каршеринг',
    href: '#',
  },
  {
    linkTitle: 'Как продать авто',
    href: '#',
  },
  {
    linkTitle: 'Trade-in',
    href: '#',
  },
  {
    linkTitle: 'Test drive',
    href: '#',
  },
];

function App({ viewStatus }) {
  return (
    <>
      <MainHeader headerLinks={headerLinks} />
      <MainPageMain>
        <h1 className={styles['visually-hidden']}>
          Информация о модели автомобиля Марпех 11
        </h1>
        <ProductInfo />
        {viewStatus && <ReviewModal />}
      </MainPageMain>
      <MainFooter footerLinks={footerLinks} />
    </>
  );
}

App.propTypes = {
  viewStatus: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  viewStatus: state.modal.viewStatus,
});

const ConnectedApp = connect(mapStateToProps, null)(App);

export default ConnectedApp;
