import { VIEW_TYPE } from "./actionsTypes";

export const changeViewType = (type) => (dispatch) => {
  localStorage.setItem("viewType", type);
  dispatch({ type: VIEW_TYPE });
};
