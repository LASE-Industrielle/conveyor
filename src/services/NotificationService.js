import axios from 'axios';

import {NOTIFICATIONS_LOAD_ERROR, NOTIFICATIONS_LOAD_START, NOTIFICATIONS_LOAD_SUCCESS} from '../reducers/Actions';
import {notificationUrl} from '../Urls';

const handleError = (dispatch, err, type) => {
  dispatch({type, error: err});
};

const getNotifications = async dispatch => {
  dispatch({type: NOTIFICATIONS_LOAD_START});
  const response = await axios.get(notificationUrl).catch(err => handleError(dispatch, err, NOTIFICATIONS_LOAD_ERROR));
  dispatch({type: NOTIFICATIONS_LOAD_SUCCESS, payload: response.data});
};

export {getNotifications};
