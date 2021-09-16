import React from 'react';
import Slider from '../slider/slider';
import Card from '../card/card';

const sliderImages = [
  {
    mainSrcStandard: '/assets/img/desktop-slide-1-1x.jpg',
    mainSrcRetina: '/assets/img/desktop-slide-1-2x.jpg',
    alt: 'Экстерьер автомобиля Марпех на фоне небоскрёбов',
    miniatureSrcStandard: '/assets/img/desktop-slide-min-1-1x.jpg',
    miniatureSrcRetina: '/assets/img/desktop-slide-min-1-2x.jpg',
    miniatureAlt:
      'Экстерьер автомобиля Марпех на фоне небоскрёбов. Уменьшенное изображение.',
  },
  {
    mainSrcStandard: '/assets/img/desktop-slide-2-1x.jpg',
    mainSrcRetina: '/assets/img/desktop-slide-2-2x.jpg',
    alt: 'Интерьер автомобиля Марпех',
    miniatureSrcStandard: '/assets/img/desktop-slide-min-2-1x.jpg',
    miniatureSrcRetina: '/assets/img/desktop-slide-min-2-2x.jpg',
    miniatureAlt: 'Интерьер автомобиля Марпех. Уменьшенное изображение.',
  },
  {
    mainSrcStandard: '/assets/img/desktop-slide-3-1x.jpg',
    mainSrcRetina: '/assets/img/desktop-slide-3-2x.jpg',
    alt: 'Спидометр автомобиля Марпех крупным планом',
    miniatureSrcStandard: '/assets/img/desktop-slide-min-3-1x.jpg',
    miniatureSrcRetina: '/assets/img/desktop-slide-min-3-2x.jpg',
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
  newPrice: 2300000,
  oldPrice: 2400000,
};

function GeneralProductInfo() {
  return (
    <div>
      <Slider sliderImages={sliderImages} />
      <Card productInfo={productInfo} />
    </div>
  );
}

export default GeneralProductInfo;
