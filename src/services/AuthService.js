import axios from 'axios';

import { AUTH_ERROR, AUTH_START, AUTH_SUCCESS, SET_USERNAME } from '../Actions';
import { loginUrl } from '../Urls';

const authCall = async (dispatch, loginUsername, loginPassword) => {
  const callConfig = {
    method: 'post',
    url: loginUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      username: loginUsername,
      password: loginPassword
    }
  };
  dispatch({ type: AUTH_START });
  const response = await axios(callConfig).catch(err => dispatch({ type: AUTH_ERROR, payload: err }));

  axios.defaults.headers.common.Authorization = `Token ${response.data.token}`;
  dispatch({ type: AUTH_SUCCESS, payload: response.data.token });
  dispatch({ type: SET_USERNAME, username: loginUsername });
};

export default authCall;
