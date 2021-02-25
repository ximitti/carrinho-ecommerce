// redux
import { createStore, combineReducers } from "redux";

// reducers
import productsReducer from "./modules/products/reducer.js";

const reducers = combineReducers({
  products: productsReducer,
});

const store = createStore(reducers);

export default store;
