import React, { useEffect, useRef, useState } from 'react';
import styles from './review-modal.module.scss';
import globalStyles from '../app/app.module.scss';
import PropTypes from 'prop-types';
import Button from '../button/button';
import {
  addReview,
  clearData,
  setAdvantages,
  setComment,
  setDisadvantages,
  setViewStatus,
  setName,
  setRating
} from '../../store/action';
import { connect } from 'react-redux';
import Rating from '../rating/rating';
import {
  getAdvantages,
  getComment,
  getDisadvantages,
  getModalRating,
  getName
} from '../../store/selectors';

function ReviewModal({
  name,
  advantages,
  disadvantages,
  modalRating,
  comment,
  onNameChange,
  onAdvantagesChange,
  onDisadvantagesChange,
  onRatingChange,
  onCommentChange,
  onReviewSubmit,
  onModalWindowClose,
}) {
  const [nameInputError, setNameInputError] = useState(false);
  const [commentInputError, setCommentInputError] = useState(false);
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const nameInputContainerClassName = nameInputError
    ? `${styles['form__field']} ${styles['form__field--name']} ${styles['form__field--error']}`
    : `${styles['form__field']} ${styles['form__field--name']}`;
  const commentInputContainerClassName = commentInputError
    ? `${styles['form__field']} ${styles['form__field--textarea']} ${styles['form__field--error']}`
    : `${styles['form__field']} ${styles['form__field--textarea']}`;

  const handleReviewSubmit = (evt) => {
    evt.preventDefault();
    !name ? setNameInputError(true) : setNameInputError(false);
    !comment ? setCommentInputError(true) : setCommentInputError(false);
    if (name && comment) {
      const review = {
        name: name,
        advantages: advantages,
        disadvantages: disadvantages,
        rating: modalRating,
        comment: comment,
      };
      onReviewSubmit(review);
      localStorage.removeItem('reviewModalData');
      onModalWindowClose();
    }
  };

  const handleKeyPressOnFirstTabbableElement = (evt, tabbables) => {
    evt.preventDefault();
    if (evt.shiftKey && evt.key === 'Tab') {
      tabbables[tabbables.length - 1].focus();
    } else if (!evt.shiftKey && evt.key === 'Tab') {
      tabbables[1].focus();
    } else if (evt.key === 'Enter') {
      onModalWindowClose();
    }
  };

  const handleKeyPressOnLastTabbableElement = (evt, tabbables) => {
    evt.preventDefault();
    if (!evt.shiftKey && evt.key === 'Tab') {
      tabbables[0].focus();
    } else if (evt.shiftKey && evt.key === 'Tab') {
      tabbables[tabbables.length - 2].focus();
    } else if (evt.key === 'Enter') {
      handleReviewSubmit(evt);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const overlayElement = overlayRef.current;
    const closeOnOverlayClick = (evt) => {
      if (evt.target === overlayElement) {
        onModalWindowClose();
      }
    };
    const closeOnEsc = (evt) => {
      if (evt.key === 'Escape') {
        onModalWindowClose();
      }
    };

    overlayElement.addEventListener('click', closeOnOverlayClick);
    window.addEventListener('keydown', closeOnEsc);
    return () => {
      overlayElement.removeEventListener('click', closeOnOverlayClick);
      window.removeEventListener('keydown', closeOnEsc);
    };
  }, []);

  useEffect(() => {
    const tabbableElements = modalRef.current.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
    );
    tabbableElements[0].addEventListener('keydown', (evt) =>
      handleKeyPressOnFirstTabbableElement(evt, tabbableElements),
    );
    tabbableElements[tabbableElements.length - 1].addEventListener(
      'keydown',
      (evt) => handleKeyPressOnLastTabbableElement(evt, tabbableElements),
    );
    return () => {
      tabbableElements[0].removeEventListener('keydown', (evt) =>
        handleKeyPressOnFirstTabbableElement(evt, tabbableElements),
      );
      tabbableElements[tabbableElements.length - 1].removeEventListener(
        'keydown',
        (evt) => handleKeyPressOnLastTabbableElement(evt, tabbableElements),
      );
    };
  }, []);

  useEffect(() => {
    const reviewModalData = {
      name,
      advantages,
      disadvantages,
      modalRating,
      comment,
    };
    localStorage.setItem('reviewModalData', JSON.stringify(reviewModalData));
  }, [name, advantages, disadvantages, modalRating, comment]);

  return (
    <div className={styles['overlay']} ref={overlayRef}>
      <div className={styles['modal']} ref={modalRef}>
        <h3 className={styles['modal__title']}>Оставить отзыв </h3>
        <Button modifier="cross" onClick={onModalWindowClose}/>
        <form
          className={`${styles['modal__form']} ${styles['form']}`}
          action=""
        >
          <div className={styles['form__fields-container']}>
            <div className={nameInputContainerClassName}>
              <label htmlFor="name" className={globalStyles['visually-hidden']}>
                Введите ваше имя
              </label>
              <input
                className={`${styles['form__input']} ${styles['form__input--name']}`}
                id="name"
                type="text"
                placeholder="Имя"
                required
                autoFocus
                value={name}
                onChange={onNameChange}
              />
            </div>
            <div className={styles['form__field']}>
              <label
                htmlFor="advantages"
                className={globalStyles['visually-hidden']}
              >
                Напишите о достоинствах продукта
              </label>
              <input
                className={styles['form__input']}
                id="advantages"
                type="text"
                placeholder="Достоинства"
                value={advantages}
                onChange={onAdvantagesChange}
              />
            </div>
            <div className={styles['form__field']}>
              <label
                htmlFor="disadvantages"
                className={globalStyles['visually-hidden']}
              >
                Напишите о достоинствах продукта
              </label>
              <input
                className={styles['form__input']}
                id="disadvantages"
                type="text"
                placeholder="Недостатки"
                value={disadvantages}
                onChange={onDisadvantagesChange}
              />
            </div>
            <span className={styles['form__rating']}>
              <span className={styles['form__give-rating']}>Оцените товар</span>
              <Rating
                rating={modalRating}
                isClickable
                onRatingChange={onRatingChange}
              />
            </span>
            <div className={commentInputContainerClassName}>
              <label
                htmlFor="comment"
                className={globalStyles['visually-hidden']}
              >
                Оставьте ваш комментарий о продукте
              </label>
              <textarea
                className={`${styles['form__input']} ${styles['form__input--textarea']}`}
                id="comment"
                placeholder="Комментарий"
                required
                value={comment}
                onChange={onCommentChange}
              />
            </div>
          </div>
          <Button modifier="primary" type="submit" onClick={handleReviewSubmit}>
            Оставить отзыв
          </Button>
        </form>
      </div>
    </div>
  );
}

ReviewModal.propTypes = {
  name: PropTypes.string,
  advantages: PropTypes.string,
  disadvantages: PropTypes.string,
  modalRating: PropTypes.number,
  comment: PropTypes.string,
  onNameChange: PropTypes.func,
  onAdvantagesChange: PropTypes.func,
  onDisadvantagesChange: PropTypes.func,
  onRatingChange: PropTypes.func,
  onCommentChange: PropTypes.func,
  onReviewSubmit: PropTypes.func,
  onModalWindowClose: PropTypes.func,
};

const mapStateToProps = (state) => ({
  name: getName(state),
  advantages: getAdvantages(state),
  disadvantages: getDisadvantages(state),
  modalRating: getModalRating(state),
  comment: getComment(state),
});

const mapDispatchToProps = (dispatch) => ({
  onNameChange(evt) {
    dispatch(setName(evt.target.value));
  },
  onAdvantagesChange(evt) {
    dispatch(setAdvantages(evt.target.value));
  },
  onDisadvantagesChange(evt) {
    dispatch(setDisadvantages(evt.target.value));
  },
  onRatingChange(ratingValue) {
    dispatch(setRating(ratingValue));
  },
  onCommentChange(evt) {
    dispatch(setComment(evt.target.value));
  },
  onReviewSubmit(reviewData) {
    dispatch(addReview(reviewData));
    dispatch(clearData());
  },
  onModalWindowClose() {
    dispatch(setViewStatus(false));
  },
});

const ConnectedReviewModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewModal);

export default ConnectedReviewModal;
