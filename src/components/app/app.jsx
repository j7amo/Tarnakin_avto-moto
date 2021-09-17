import React from 'react';
import styles from './app.module.scss';
import MainHeader from '../main-header/main-header';
import MainFooter from '../main-footer/main-footer';
import MainPageMain from '../main-page-main/main-page-main';
import ProductInfo from '../product-info/product-info';

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

function App() {
  return (
    <>
      <MainHeader headerLinks={headerLinks} />
      <MainPageMain>
        <h1 className={styles['visually-hidden']}>Информация о модели автомобиля Марпех 11</h1>
        <ProductInfo/>
      </MainPageMain>
      <MainFooter footerLinks={footerLinks} />
    </>
  );
}

export default App;
