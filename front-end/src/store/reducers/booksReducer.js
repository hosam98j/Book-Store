import {
  GET_DATA,
  GET_USER_ALL_BOOKS,
  SELLERS_DATA,
} from "../actions/actionsTypes";

const intState = {
  books: [],
};

const booksReducer = (state = intState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        books: action.payload.reverse(),
      };
    case GET_USER_ALL_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
