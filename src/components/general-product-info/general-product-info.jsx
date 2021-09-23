import React from 'react';
import styles from './general-product-info.module.scss';
import Slider from '../slider/slider';
import Card from '../card/card';
import { sliderImages, productInfo } from '../../mocks/mocks';

function GeneralProductInfo() {
  return (
    <div className={styles['info-container']}>
      <Slider sliderImages={sliderImages} />
      <Card productInfo={productInfo} />
    </div>
  );
}

export default GeneralProductInfo;
