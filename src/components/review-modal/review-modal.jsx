import React, { useEffect, useRef, useState } from 'react';
import styles from './review-modal.module.scss';
import globalStyles from '../app/app.module.scss';
import PropTypes from 'prop-types';
import Button from '../button/button';
import {
  addReview, clearModalData,
  setAdvantages,
  setComment,
  setDisadvantages,
  setModalViewStatus,
  setName,
  setRating
} from '../../store/action';
import { connect } from 'react-redux';
import Rating from '../rating/rating';

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
  const [nameInputError, setNameInputError] = useState(true);
  const [commentInputError, setCommentInputError] = useState(true);
  const overlayRef = useRef(null);
  const nameInputContainerClassName = nameInputError
    ? `${styles['form__field']} ${styles['form__field--name']} ${styles['form__field--error']}`
    : `${styles['form__field']} ${styles['form__field--name']}`;
  const commentInputContainerClassName = commentInputError
    ? `${styles['form__field']} ${styles['form__field--textarea']} ${styles['form__field--error']}`
    : `${styles['form__field']} ${styles['form__field--textarea']}`;

  useEffect(() => {
    if (!name) {
      setNameInputError(true);
    } else if (name) {
      setNameInputError(false);
    }
  }, [name]);

  useEffect(() => {
    if (!comment) {
      setCommentInputError(true);
    } else if (comment) {
      setCommentInputError(false);
    }
  }, [comment]);

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
    const reviewModalData = {
      name,
      advantages,
      disadvantages,
      modalRating,
      comment,
    };
    localStorage.setItem('reviewModalData', JSON.stringify(reviewModalData));
  }, [name, advantages, disadvantages, modalRating, comment]);

  const handleReviewSubmit = () => {
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
  };

  return (
    <div className={styles['overlay']} ref={overlayRef}>
      <div className={styles['modal']}>
        <h3 className={styles['modal__title']}>Оставить отзыв </h3>
        <Button modifier="cross" onClick={onModalWindowClose} />
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
              Оцените товар
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
                className={`${styles['form__input']} ${styles['form__input--textarea']} ${styles['form__field--error']}`}
                id="comment"
                placeholder="Комментарий"
                required
                value={comment}
                onChange={onCommentChange}
              />
            </div>
          </div>
          <Button
            modifier="primary"
            type="submit"
            onClick={handleReviewSubmit}
            disabled={!name || !comment}
          >
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
  name: state.modal.name,
  advantages: state.modal.advantages,
  disadvantages: state.modal.disadvantages,
  modalRating: state.modal.modalRating,
  comment: state.modal.comment,
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
    dispatch(clearModalData());
  },
  onModalWindowClose() {
    dispatch(setModalViewStatus(false));
  },
});

const ConnectedReviewModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewModal);

export default ConnectedReviewModal;
