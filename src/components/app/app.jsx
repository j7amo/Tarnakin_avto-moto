import React from 'react';
import styles from './app.module.scss';
import PropTypes from 'prop-types';
import MainHeader from '../main-header/main-header';
import MainFooter from '../main-footer/main-footer';
import MainPageMain from '../main-page-main/main-page-main';
import ProductInfo from '../product-info/product-info';
import ReviewModal from '../review-modal/review-modal';
import { connect } from 'react-redux';
import { getViewStatus } from '../../store/selectors';
import { headerLinks,footerLinks } from '../../const';

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
  viewStatus: getViewStatus(state),
});

const ConnectedApp = connect(mapStateToProps, null)(App);

export default ConnectedApp;
