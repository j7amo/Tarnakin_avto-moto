import { ActionType } from './action';

const initialState = {
  reviews: [
    {
      author: 'Борис Иванов',
      advantages: 'мощность, внешний вид',
      disadvantages: 'Слабые тормозные колодки (пришлось заменить)',
      comment:
        'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
      rating: 3,
      reviewDate: '1 минуту назад',
    },
    {
      author: 'Марсель Исмагилов',
      advantages: 'Cтиль, комфорт, управляемость',
      disadvantages: ' Дорогой ремонт и обслуживание',
      comment:
        'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
      rating: 3,
      reviewDate: '1 минуту назад',
    },
  ],
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, {
          author: action.payload.name,
          advantages: action.payload.advantages || 'Пользователь не написал о преимуществах',
          disadvantages: action.payload.disadvantages || 'Пользователь не написал о недостатках',
          comment: action.payload.comment,
          rating: action.payload.rating,
          reviewDate: '1 минуту назад',
        }],
      };
    default:
      return state;
  }
};

export { reviewsReducer };
