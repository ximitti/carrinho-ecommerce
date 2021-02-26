import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

//--------------------------------------------------------
export const addProduct = (products) => ({ type: ADD_PRODUCT, products });
export const removeProduct = (list) => ({ type: REMOVE_PRODUCT, list });
