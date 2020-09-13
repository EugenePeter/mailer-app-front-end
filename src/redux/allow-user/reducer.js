import { UserAccess } from "./type";

const INITIAL_STATE = {};

const allowUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserAccess.ALLOW_USER_ACCESS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case UserAccess.ALLOW_USER_ACCESS_FAILED:
    default:
      return state;
  }
};

export default allowUserReducer;
