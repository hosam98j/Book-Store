const intState = {
  cart: [],
};

const cartReducer = (state = intState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state.cart.push(action.payload);
      return {
        ...state,
        cart: state.cart,
      };
    default:
      return state;
  }
};

export default cartReducer;
