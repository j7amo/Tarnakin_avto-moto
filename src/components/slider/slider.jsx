import React, { useState } from 'react';
import styles from './slider.module.scss';
import PropTypes from 'prop-types';
import Button from '../button/button';
import { nanoid } from 'nanoid';

function Slider({ sliderImages }) {
  const [activeSlide, setActiveSlide] = useState(sliderImages[0]);
  const { mainSrcStandard, mainSrcRetina, alt } = activeSlide;
  const activeSlideIndex = sliderImages.indexOf(activeSlide);
  let slidesToMap = [];
  if (sliderImages.length > 3 && sliderImages.length - 1 - activeSlideIndex > 1) {
    slidesToMap = sliderImages.slice(activeSlideIndex, activeSlideIndex + 3);
  } else if (sliderImages.length > 3 && sliderImages.length - 1 - activeSlideIndex === 1) {
    slidesToMap = sliderImages.slice(activeSlideIndex - 1, activeSlideIndex + 2);
  } else if (sliderImages.length > 3 && sliderImages.length - 1 - activeSlideIndex === 0) {
    slidesToMap = sliderImages.slice(activeSlideIndex - 2, activeSlideIndex + 1);
  } else if (sliderImages.length <= 3) {
    slidesToMap = sliderImages;
  }

  return (
    <div className={styles['slider']}>
      <div className={styles['slider__active-slide-container']}>
        <img
          srcSet={`${mainSrcStandard} 1x, ${mainSrcRetina} 2x`}
          src={mainSrcStandard}
          alt={alt}
        />
      </div>
      <div className={styles['slider__controls']}>
        <Button
          modifier="rounded-left"
          onClick={() => {
            const currentIndex = sliderImages.indexOf(activeSlide);
            setActiveSlide(
              currentIndex === 0
                ? sliderImages[currentIndex]
                : sliderImages[currentIndex - 1],
            );
          }}
          disabled={sliderImages.indexOf(activeSlide) === 0}
        />
        <ul className={styles['slider__miniatures']}>
          {slidesToMap.map(
            ({ miniatureSrcStandard, miniatureSrcRetina, miniatureAlt }) => (
              <li key={nanoid()} className={styles['slider__miniature']}>
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
          modifier="rounded-right"
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
        />
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
