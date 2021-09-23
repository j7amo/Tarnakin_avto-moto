import {ContactType, TechDetailsType} from '../const';
import mainSrcStandardFirstSlide from '../assets/img/desktop-slide-1-1x.jpg';
import mainSrcRetinaFirstSlide from '../assets/img/desktop-slide-1-2x.jpg';
import miniatureSrcStandardFirstSlide from '../assets/img/desktop-slide-min-1-1x.jpg';
import miniatureSrcRetinaFirstSlide from '../assets/img/desktop-slide-min-1-2x.jpg';
import mainSrcStandardSecondSlide from '../assets/img/desktop-slide-2-1x.jpg';
import mainSrcRetinaSecondSlide from '../assets/img/desktop-slide-2-2x.jpg';
import miniatureSrcStandardSecondSlide from '../assets/img/desktop-slide-min-2-1x.jpg';
import miniatureSrcRetinaSecondSlide from '../assets/img/desktop-slide-min-2-2x.jpg';
import mainSrcStandardThirdSlide from '../assets/img/desktop-slide-3-1x.jpg';
import mainSrcRetinaThirdSlide from '../assets/img/desktop-slide-3-2x.jpg';
import miniatureSrcStandardThirdSlide from '../assets/img/desktop-slide-min-3-1x.jpg';
import miniatureSrcRetinaThirdSlide from '../assets/img/desktop-slide-min-3-2x.jpg';

export const sliderImages = [
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

export const productInfo = {
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

export const productTechnicalDetails = [
  {
    name: 'Трансмиссия',
    value: 'Роботизированная',
  },
  {
    name: 'Мощность двигателя, л.с.',
    value: '249',
  },
  {
    name: 'Тип двигателя',
    value: 'Бензиновый',
  },
  {
    name: 'Привод',
    value: 'Полный',
  },
  {
    name: 'Объем двигателя, л',
    value: '2.4',
  },
  {
    name: 'Макс. крутящий момент',
    value: '370/4500',
  },
  {
    name: 'Количество цилиндров',
    value: '4',
  },
];

export const contacts = [
  {
    name: 'Адрес',
    value: 'Санкт-Петербург,\nнабережная реки Карповки, дом 5',
    type: ContactType.TEXT,
  },
  {
    name: 'Режим работы',
    value: 'Ежедневно, с 10:00 до 21:00',
    type: ContactType.TEXT,
  },
  {
    name: 'Телефон',
    value: '8 (800) 333-55-99',
    type: ContactType.PHONE,
  },
  {
    name: 'E-mail',
    value: 'info@avto-moto.ru',
    type: ContactType.EMAIL,
  },
];
