import { VIEW_TYPE } from "../actions/actionsTypes";

const intState = {
  isLoading: true,
  viewType: "row",
};

const uiReducer = (state = intState, action) => {
  switch (action.type) {
    case "@@INIT":
      const view_type = localStorage.getItem("viewType");
      if (view_type) {
        return {
          ...state.ui,
          viewType: view_type,
        };
      }
      return state;

    case VIEW_TYPE:
      return {
        ...state,

        viewType: localStorage.getItem("viewType"),
      };

    default:
      return state;
  }
};

export default uiReducer;
