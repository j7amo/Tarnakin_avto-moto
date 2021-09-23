import { ActionType } from './action';

const localStorageReviewModalData = localStorage.getItem('reviewModalData')
  ? JSON.parse(localStorage.getItem('reviewModalData'))
  : null;

const initialState = localStorageReviewModalData
  ? {
    viewStatus: false,
    name: localStorageReviewModalData.name,
    advantages: localStorageReviewModalData.advantages,
    disadvantages: localStorageReviewModalData.disadvantages,
    modalRating: localStorageReviewModalData.modalRating,
    comment: localStorageReviewModalData.comment,
  }
  : {
    viewStatus: false,
    name: '',
    advantages: '',
    disadvantages: '',
    modalRating: 0,
    comment: '',
  };

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_VIEW_STATUS:
      return {
        ...state,
        viewStatus: action.payload,
      };
    case ActionType.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ActionType.SET_ADVANTAGES:
      return {
        ...state,
        advantages: action.payload,
      };
    case ActionType.SET_DISADVANTAGES:
      return {
        ...state,
        disadvantages: action.payload,
      };
    case ActionType.SET_RATING:
      return {
        ...state,
        modalRating: action.payload,
      };
    case ActionType.SET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case ActionType.CLEAR_DATA:
      return {
        ...state,
        viewStatus: false,
        name: '',
        advantages: '',
        disadvantages: '',
        modalRating: 0,
        comment: '',
      };
    default:
      return state;
  }
};

export { modalReducer };
