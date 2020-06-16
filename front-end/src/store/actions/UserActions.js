import { GET_DATA, USER_STATUS, GET_USER_ALL_BOOKS } from "./actionsTypes";

// get all books from db
export const getData = () => async (dispatch) => {
  const config = {
    method: "GET",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  const res = await fetch("http://192.168.43.121:5000/main", config);
  const { data } = await res.json();
  dispatch({ type: GET_DATA, payload: data });
};

// when select the book he want to buy
export const addToCart = (book) => (dispatch) => {
  return dispatch({ type: "ADD_TO_CART", payload: book });
};

export const userInfoAndStatus = () => async (dispatch) => {
  const config = {
    method: "GET",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const res = await fetch("http://192.168.43.121:5000/main/user_info", config);
  const { user } = await res.json();

  dispatch({ type: USER_STATUS, payload: user });
};

// addbook function let the user add book to the db
export const addBook = (bookData) => (dispatch) => {
  const config = {
    method: "POST",
    headers: {
      authorization: localStorage.getItem("token"),
    },
    body: bookData,
  };
  fetch("http://192.168.43.121:5000/main/addbook", config);
};

// get all books specefics for current User
export const getUserAllBooks = () => async (dispatch) => {
  const config = {
    method: "GET",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const res = await fetch(
    "http://192.168.43.121:5000/main/all_user_books",
    config
  );
  const { Books } = await res.json();
  console.log(Books);
  dispatch({ type: GET_USER_ALL_BOOKS, payload: Books });
};
