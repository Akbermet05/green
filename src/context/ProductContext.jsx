import axios from "axios";
import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { API } from "../helpers/const";
const productContext = createContext();
export const useShop = () => useContext(productContext);

const initialState = {
  value: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, value: action.payload };

    default:
      return state;
  }
};
const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  async function addShop(add) {
    await axios.post(API, add);
  }
  async function readShop() {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET",
      payload: data.data,
    });
  }
  async function deleteShop(id) {
    await axios.delete(`${API}/${id}`);
    readShop();
  }
  const values = {
    addShop,
    readShop,
    deleteShop,
    data: state.value,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
