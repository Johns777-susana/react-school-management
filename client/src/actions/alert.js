import { SET_ALERT, REMOVE_ALERT } from '../constants/constant';
import { v4 as uuid } from 'uuid';

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid();

  dispatch({
    type: SET_ALERT,
    payload: {
      id,
      msg,
      alertType,
    },
  });

  // remove alert after 3sec
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    3000
  );
};