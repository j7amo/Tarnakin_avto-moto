export const ActionType = {
  SET_MODAL_VIEW_STATUS: 'modal/modalViewStatusSet',
  SET_NAME: 'modal/nameSet',
  SET_ADVANTAGES: 'modal/advantagesSet',
  SET_DISADVANTAGES: 'modal/disadvantagesSet',
  SET_RATING: 'modal/ratingSet',
  SET_COMMENT: 'modal/commentSet',
  CLEAR_MODAL_DATA: 'modal/modalDataCleared',
  ADD_REVIEW: 'reviews/reviewAdded',
};

export function setModalViewStatus(status) {
  return {
    type: ActionType.SET_MODAL_VIEW_STATUS,
    payload: status,
  };
}

export function setName(name) {
  return {
    type: ActionType.SET_NAME,
    payload: name,
  };
}

export function setAdvantages(advantages) {
  return {
    type: ActionType.SET_ADVANTAGES,
    payload: advantages,
  };
}

export function setDisadvantages(disadvantages) {
  return {
    type: ActionType.SET_DISADVANTAGES,
    payload: disadvantages,
  };
}

export function setRating(rating) {
  return {
    type: ActionType.SET_RATING,
    payload: rating,
  };
}

export function setComment(comment) {
  return {
    type: ActionType.SET_COMMENT,
    payload: comment,
  };
}

export function clearModalData() {
  return {
    type: ActionType.CLEAR_MODAL_DATA,
  };
}

export function addReview(review) {
  return {
    type: ActionType.ADD_REVIEW,
    payload: review,
  };
}
