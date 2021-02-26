import { addProduct, removeProduct } from "./actions";
//------------------------------------------------

export const addProductThunk = (product) => {
  return async (dispatch, getStore) => {
    let newList = JSON.parse(localStorage.getItem("cart")) || [];
    const item = newList.find((e) => e.id === product.id);

    if (item) {
      newList = newList.map((elemento) => {
        return elemento.id === item.id
          ? { ...elemento, quantity: elemento.quantity + 1 }
          : elemento;
      });
    } else {
      newList.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(newList));
    dispatch(addProduct(newList));
  };
};

export const removeProductThunk = (id) => {
  return (dispatch, getStore) => {
    const { list } = getStore();
    const item = list.find((product) => product.id === id);
    let newList = [];

    if (item.quantity > 1) {
      newList = list.map((elemento) => {
        return elemento.id === item.id
          ? { ...elemento, quantity: elemento.quantity - 1 }
          : elemento;
      });
    } else {
      newList = list.filter((elemento) => elemento.id !== id);
    }
    localStorage.setItem("cart", JSON.stringify(newList));
    dispatch(removeProduct(newList));
  };
};
