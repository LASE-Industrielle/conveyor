import { CONVEYOR_LOAD_ERROR, CONVEYOR_LOAD_START, CONVEYOR_LOAD_SUCCESS } from './Actions';

const conveyorReducer = (state, action) => {
  switch (action.type) {
  case CONVEYOR_LOAD_START:
    return {
      ...state,
      loading: true,
    };
  case CONVEYOR_LOAD_SUCCESS:
    return {
      ...state,
      details: action.payload,
      loading: false,
    };
  case CONVEYOR_LOAD_ERROR:
    return {
      ...state,
      errorMessage: 'failed',
      loading: false,
    };
  default:
    return state;
  }
};
export default conveyorReducer;
