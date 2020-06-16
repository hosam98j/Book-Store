import { SELLERS_DATA } from "../actions/actionsTypes";

export const getAllSellers = () => async (dispatch) => {
  console.log("run");
  const res = await fetch("http://192.168.43.121:5000/main/get_all_sellers");
  const { sellers } = await res.json();
  dispatch({ type: SELLERS_DATA, payload: sellers });
};
