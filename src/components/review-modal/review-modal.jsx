import React from 'react';
import styles from './review-modal.module.scss';
import globalStyles from '../app/app.module.scss';
import PropTypes from 'prop-types';
import Button from '../button/button';
import { setModalViewStatus } from '../../store/action';
import { connect } from 'react-redux';

function ReviewModal({ onReviewButtonCloseClick }) {
  return (
    <div className={styles['overlay']}>
      <div className={styles['modal']}>
        <h3 className={styles['modal__title']}>Оставить отзыв </h3>
        <Button modifier="cross" onClick={() => onReviewButtonCloseClick(false)}/>
        <form
          className={`${styles['modal__form']} ${styles['form']}`}
          action=""
        >
          <div className={styles['form__fields-container']}>
            <div
              className={`${styles['form__field']} ${styles['form__field--name']}`}
            >
              <label htmlFor="name" className={globalStyles['visually-hidden']}>
                Введите ваше имя
              </label>
              <input
                className={`${styles['form__input']} ${styles['form__input--name']}`}
                id="name"
                type="text"
                placeholder="Имя"
                required
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
              />
            </div>
            <span>Здесь будет блок со звёздами!</span>
            <div
              className={`${styles['form__field']} ${styles['form__field--textarea']}`}
            >
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
              />
            </div>
          </div>
          <Button modifier="primary" type="submit">Оставить отзыв</Button>
        </form>
      </div>
    </div>
  );
}

ReviewModal.propTypes = {
  onReviewButtonCloseClick: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onReviewButtonCloseClick(status) {
    dispatch(setModalViewStatus(status));
  },
});

const ConnectedReviewModal = connect(null, mapDispatchToProps)(ReviewModal);

export default ConnectedReviewModal;
