import axios from 'axios';

import {
  CONVEYOR_LOAD_ERROR,
  CONVEYOR_LOAD_START,
  CONVEYOR_LOAD_SUCCESS,
  CONVEYORS_LOAD_ERROR,
  CONVEYORS_LOAD_START,
  CONVEYORS_LOAD_SUCCESS,
} from '../reducers/Actions';
import { conveyorsUrl } from '../Urls';

const handleError = (dispatch, err, type) => {
  dispatch({ type, error: err });
};

const getConveyors = async dispatch => {
  dispatch({ type: CONVEYORS_LOAD_START });
  const response = await axios.get(conveyorsUrl).catch(err => handleError(dispatch, err, CONVEYORS_LOAD_ERROR));
  dispatch({ type: CONVEYORS_LOAD_SUCCESS, payload: response.data });
};

const getConveyorById = async (dispatch, id, reloadPage = true) => {
  if (reloadPage) {
    dispatch({ type: CONVEYOR_LOAD_START });
  }
  const response = await axios
    .get(`${conveyorsUrl + id}/`)
    .catch(err => handleError(dispatch, err, CONVEYOR_LOAD_ERROR));
  dispatch({ type: CONVEYOR_LOAD_SUCCESS, payload: response.data });
};

export { getConveyors, getConveyorById };
