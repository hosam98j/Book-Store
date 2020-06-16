import { USER_LOG_IN, LOG_OUT, USER_STATUS } from "../actions/actionsTypes";

const intState = {
  user: null,
};

const authReducer = (state = intState, action) => {
  switch (action.type) {
    case USER_LOG_IN:
      const user = action.payload ? action.payload : undefined;
      return {
        ...state,
        user,
      };
    case LOG_OUT:
      return {
        ...state,
        user: undefined,
      };

    case USER_STATUS:
      const user_status = action.payload === false ? undefined : action.payload;
      return {
        ...state,
        user: user_status,
      };
    default:
      return state;
  }
};

export default authReducer;
