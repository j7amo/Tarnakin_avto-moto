import React from 'react';
import styles from './general-product-info.module.scss';
import Slider from '../slider/slider';
import Card from '../card/card';
import mainSrcStandardFirstSlide from '../../assets/img/desktop-slide-1-1x.jpg';
import mainSrcRetinaFirstSlide from '../../assets/img/desktop-slide-1-2x.jpg';
import miniatureSrcStandardFirstSlide from '../../assets/img/desktop-slide-min-1-1x.jpg';
import miniatureSrcRetinaFirstSlide from '../../assets/img/desktop-slide-min-1-2x.jpg';
import mainSrcStandardSecondSlide from '../../assets/img/desktop-slide-2-1x.jpg';
import mainSrcRetinaSecondSlide from '../../assets/img/desktop-slide-2-2x.jpg';
import miniatureSrcStandardSecondSlide from '../../assets/img/desktop-slide-min-2-1x.jpg';
import miniatureSrcRetinaSecondSlide from '../../assets/img/desktop-slide-min-2-2x.jpg';
import mainSrcStandardThirdSlide from '../../assets/img/desktop-slide-3-1x.jpg';
import mainSrcRetinaThirdSlide from '../../assets/img/desktop-slide-3-2x.jpg';
import miniatureSrcStandardThirdSlide from '../../assets/img/desktop-slide-min-3-1x.jpg';
import miniatureSrcRetinaThirdSlide from '../../assets/img/desktop-slide-min-3-2x.jpg';

const sliderImages = [
  {
    mainSrcStandard: mainSrcStandardFirstSlide,
    mainSrcRetina: mainSrcRetinaFirstSlide,
    alt: 'Экстерьер автомобиля Марпех на фоне небоскрёбов',
    miniatureSrcStandard: miniatureSrcStandardFirstSlide,
    miniatureSrcRetina: miniatureSrcRetinaFirstSlide,
    miniatureAlt:
      'Экстерьер автомобиля Марпех на фоне небоскрёбов. Уменьшенное изображение.',
  },
  {
    mainSrcStandard: mainSrcStandardSecondSlide,
    mainSrcRetina: mainSrcRetinaSecondSlide,
    alt: 'Интерьер автомобиля Марпех',
    miniatureSrcStandard: miniatureSrcStandardSecondSlide,
    miniatureSrcRetina: miniatureSrcRetinaSecondSlide,
    miniatureAlt: 'Интерьер автомобиля Марпех. Уменьшенное изображение.',
  },
  {
    mainSrcStandard: mainSrcStandardThirdSlide,
    mainSrcRetina: mainSrcRetinaThirdSlide,
    alt: 'Спидометр автомобиля Марпех крупным планом',
    miniatureSrcStandard: miniatureSrcStandardThirdSlide,
    miniatureSrcRetina: miniatureSrcRetinaThirdSlide,
    miniatureAlt:
      'Спидометр автомобиля Марпех крупным планом. Уменьшенное изображение.',
  },
];

const TechDetailsType = {
  FUEL_TYPE: 'fuel-type',
  TRANSMISSION_TYPE: 'transmission-type',
  ENGINE_POWER: 'engine-power',
  ENGINE_VOLUME: 'engine-volume',
};

const productInfo = {
  productName: 'Марпех 11',
  mainTechnicalDetails: [
    {
      name: 'бензин',
      type: TechDetailsType.FUEL_TYPE,
    },
    {
      name: 'механика',
      type: TechDetailsType.TRANSMISSION_TYPE,
    },
    {
      name: '100 л.с.',
      type: TechDetailsType.ENGINE_POWER,
    },
    {
      name: '1.4 л',
      type: TechDetailsType.ENGINE_VOLUME,
    },
  ],
  newPrice: '2 300 000 ₽',
  oldPrice: '2 400 000 ₽',
};

function GeneralProductInfo() {
  return (
    <div className={styles['info-container']}>
      <Slider sliderImages={sliderImages} />
      <Card productInfo={productInfo} />
    </div>
  );
}

export default GeneralProductInfo;
