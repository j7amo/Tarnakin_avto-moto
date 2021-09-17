import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import { nanoid } from 'nanoid';

function Slider({ sliderImages }) {
  const [activeSlide, setActiveSlide] = useState(sliderImages[0]);
  const { mainSrcStandard, mainSrcRetina, alt } = activeSlide;

  return (
    <div>
      <div>
        <img
          srcSet={`${mainSrcStandard} 1x, ${mainSrcRetina} 2x`}
          src={mainSrcStandard}
          alt={alt}
        />
      </div>
      <div>
        <Button
          onClick={() => {
            const currentIndex = sliderImages.indexOf(activeSlide);
            setActiveSlide(
              currentIndex === 0
                ? sliderImages[currentIndex]
                : sliderImages[currentIndex - 1],
            );
          }}
          disabled={sliderImages.indexOf(activeSlide) === 0}
        >
          Назад
        </Button>
        <ul>
          {/*контейнер для миниатюр*/}
          {sliderImages.map(
            ({ miniatureSrcStandard, miniatureSrcRetina, miniatureAlt }) => (
              <li key={nanoid()}>
                <img
                  srcSet={`${miniatureSrcStandard} 1x, ${miniatureSrcRetina} 2x`}
                  src={miniatureSrcStandard}
                  alt={miniatureAlt}
                />
              </li>
            ),
          )}
        </ul>
        <Button
          onClick={() => {
            const currentIndex = sliderImages.indexOf(activeSlide);
            setActiveSlide(
              currentIndex === sliderImages.length - 1
                ? sliderImages[currentIndex]
                : sliderImages[currentIndex + 1],
            );
          }}
          disabled={
            sliderImages.indexOf(activeSlide) === sliderImages.length - 1
          }
        >
          Вперёд
        </Button>
      </div>
    </div>
  );
}

Slider.propTypes = {
  sliderImages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  ),
};

export default Slider;
