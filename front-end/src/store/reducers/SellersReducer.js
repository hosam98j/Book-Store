import { SELLERS_DATA } from "../actions/actionsTypes";

const intState = {
  sellers: [],
};

const SellersReducer = (state = intState, action) => {
  switch (action.type) {
    case SELLERS_DATA:
      return {
        ...state,
        sellers: action.payload,
      };
    default:
      return state;
  }
};

export default SellersReducer;
