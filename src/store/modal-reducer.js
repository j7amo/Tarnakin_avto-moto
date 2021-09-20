import { ActionType } from './action';

const initialState = {
  viewStatus: false,
  name: '',
  advantages: '',
  disadvantages: '',
  modalRating: 0,
  comment: '',
};

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.SET_MODAL_VIEW_STATUS:
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
    default:
      return state;
  }
};

export { modalReducer };
