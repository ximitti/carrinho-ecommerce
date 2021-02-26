import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";
//---------------------------------------------------------
const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { products } = action;
      return products;

    case REMOVE_PRODUCT:
      const { list } = action;
      return list;

    default:
      return state;
  }
};

export default cartReducer;
