import { ActionType } from './action';

const initialState = {
  viewStatus: false,
};

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.SET_MODAL_VIEW_STATUS:
      return {
        ...state,
        viewStatus: action.payload,
      };
    default:
      return state;
  }
};

export { modalReducer };
