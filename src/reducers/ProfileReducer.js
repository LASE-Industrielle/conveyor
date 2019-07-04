import { LOGOUT_USER, SET_USERNAME } from "../Actions";

const profileReducer = (state, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case LOGOUT_USER:
      return {
        ...state,
        username: ""
      };
    default:
      return state;
  }
};
export { profileReducer };
