// redux
import { createStore, combineReducers, applyMiddleware } from "redux";

// thunks
import thunk from "redux-thunk";

// reducers
import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";

//---------------------------------------------------------
const reducers = combineReducers({
  products: productsReducer,
  list: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
