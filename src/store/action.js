export const ActionType = {
  SET_MODAL_VIEW_STATUS: 'modal/modalViewStatusSet',
};

export function setModalViewStatus(status) {
  return {
    type: ActionType.SET_MODAL_VIEW_STATUS,
    payload: status,
  };
}
