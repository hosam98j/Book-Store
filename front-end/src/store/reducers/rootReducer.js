import { combineReducers } from "redux";
import authReducer from "./authReducer";
import uiReducer from "./uiReducer";
import cartReducer from "./cartReducer";
import booksReducer from "./booksReducer";
import SellersReducer from "./SellersReducer";

const rootReducer = combineReducers({
  userState: authReducer,
  uiState: uiReducer,
  cartState: cartReducer,
  booksState: booksReducer,
  sellersState: SellersReducer,
});

export default rootReducer;
