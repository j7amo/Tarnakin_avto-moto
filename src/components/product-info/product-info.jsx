import React from 'react';
import styles from './product-info.module.scss';
import CenteringContainer from '../centering-container/centering-container';
import GeneralProductInfo from '../general-product-info/general-product-info';
import AdditionalProductInfo from '../additional-product-info/additional-product-info';
import { TabName } from '../../const';

function ProductInfo() {
  return (
    <section className={styles['product-info']}>
      <CenteringContainer>
        <GeneralProductInfo />
        <AdditionalProductInfo tabs={Object.values(TabName)} />
      </CenteringContainer>
    </section>
  );
}

export default ProductInfo;
