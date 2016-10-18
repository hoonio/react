import { dispatch } from 'react-redux';

export const CHANGING_PAGE = 'CHANGING_PAGE';

const reduceState = (newState) => ({
  status: newState,
  type: CHANGING_PAGE
});

export const changeState = (newState) => {
  return (dispatch, getState) => {
    if (getState().appstate.ready) {
      return;
    }
    return dispatch(reduceState(newState));
  };
};
