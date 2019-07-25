import { NOTIFICATIONS_LOAD_START, NOTIFICATIONS_LOAD_ERROR, NOTIFICATIONS_LOAD_SUCCESS } from './Actions';

const notificationReducer = (state, action) => {
  switch (action.type) {
    case NOTIFICATIONS_LOAD_START:
      return {
        ...state,
        loading: true
      };
    case NOTIFICATIONS_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case NOTIFICATIONS_LOAD_ERROR:
      return {
        ...state,
        errorMessage: 'failed',
        loading: false
      };
    default:
      return state;
  }
};
export default notificationReducer;
