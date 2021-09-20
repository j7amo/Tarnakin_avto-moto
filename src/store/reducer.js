import { combineReducers } from 'redux';
import { modalReducer } from './modal-reducer';
import {reviewsReducer} from './reviews-reducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  reviews: reviewsReducer,
});

export { rootReducer };
