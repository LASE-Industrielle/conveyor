import axios from 'axios';
import {
    CONVEYORS_LOAD_SUCCESS,
    CONVEYORS_LOAD_START,
    CONVEYORS_LOAD_ERROR,
    CONVEYOR_LOAD_START,
    CONVEYOR_LOAD_SUCCESS, CONVEYOR_LOAD_ERROR
} from '../Actions';
import { conveyorsUrl } from '../Urls';

const getConveyors = (dispatch) => {
    dispatch({ type: CONVEYORS_LOAD_START });
    axios.get(conveyorsUrl)
        .then(response => dispatch({
            type: CONVEYORS_LOAD_SUCCESS,
            payload: response.data,
        }))
        .catch((err) => {
            dispatch({
                type: CONVEYORS_LOAD_ERROR,
                error: err
            });
        });
};

const getConveyorById = (dispatch, id) => {
    dispatch({ type: CONVEYOR_LOAD_START });
    axios.get(conveyorsUrl + id + '/')
        .then(response => dispatch({
            type: CONVEYOR_LOAD_SUCCESS,
            payload: response.data,
        }))
        .catch((err) => {
            dispatch({
                type: CONVEYOR_LOAD_ERROR,
                error: err
            });
        });
};

export {getConveyors, getConveyorById};
