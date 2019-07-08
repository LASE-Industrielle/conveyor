import { CONVEYORS_LOAD_ERROR, CONVEYORS_LOAD_START, CONVEYORS_LOAD_SUCCESS } from '../Actions';

const conveyorsReducer = (state, action) => {
  switch (action.type) {
    case CONVEYORS_LOAD_START:
      return {
        ...state,
        loading: true
      };
    case CONVEYORS_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case CONVEYORS_LOAD_ERROR:
      return {
        ...state,
        errorMessage: 'failed',
        loading: false
      };
    default:
      return state;
  }
};
export default conveyorsReducer;
