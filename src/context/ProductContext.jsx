import axios from "axios";
import React, { useContext, useReducer, useState } from "react";
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
  const [totalPage, setTotalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("All");

  async function addShop(add) {
    await axios.post(API, add);
  }
  async function readShop() {
    let { data } = await axios.get(
      `${API}?per_page=6&current_page=${currentPage}&searchKey=name&searchValue=${searchValue}${
        selectedColor !== "All"
          ? `&searchKey=plants&searchValue=${selectedColor}`
          : ""
      }`
    );
    setTotalPage(data.total_pages);
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
    searchValue,
    setSearchValue,
    totalPage,
    currentPage,
    setCurrentPage,
    selectedColor,
    setSelectedColor,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
