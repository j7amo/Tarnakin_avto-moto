import React from 'react';
import Slider from '../slider/slider';

const sliderImages = [
  {
    mainSrcStandard: '/assets/img/desktop-slide-1-1x.jpg',
    mainSrcRetina: '/assets/img/desktop-slide-1-2x.jpg',
    alt: 'Экстерьер автомобиля Марпех на фоне небоскрёбов',
    miniatureSrcStandard: '/assets/img/desktop-slide-min-1-1x.jpg',
    miniatureSrcRetina: '/assets/img/desktop-slide-min-1-2x.jpg',
    miniatureAlt: 'Экстерьер автомобиля Марпех на фоне небоскрёбов. Уменьшенное изображение.',
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
    miniatureAlt: 'Спидометр автомобиля Марпех крупным планом. Уменьшенное изображение.',
  },
];

function GeneralProductInfo() {
  return (
    <div>
      <Slider sliderImages={sliderImages}/>
    </div>
  );
}

export default GeneralProductInfo;
