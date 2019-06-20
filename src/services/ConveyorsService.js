import axios from 'axios';
import { CONVEYOR_LOAD_SUCCESS, CONVEYOR_LOAD_START, CONVEYOR_LOAD_ERROR } from '../Actions';
import { conveyorsUrl } from '../Urls';

const getConveyors = (dispatch) => {
    dispatch({ type: CONVEYOR_LOAD_START });
    axios.get(conveyorsUrl)
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

export default getConveyors;
