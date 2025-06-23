import axios from "axios";
import React, { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import { API } from "../helpers/const";
const productContext = createContext();
export const useShop = () => useContext(productContext);

const initialState = {
  value: [],
  oneTask: {},
  plants: JSON.parse(localStorage.getItem("cart")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, value: action.payload };
    case "GET_TASK":
      return { ...state, oneTask: action.payload };
    case "GET_CART":
      return { ...state, plants: action.payload };
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

  async function Task(id) {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_TASK",
      payload: data,
    });
  }

  async function deleteShop(id) {
    await axios.delete(`${API}/${id}`);
    readShop();
  }

  // --------------->
  function cart(plants) {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    const cart = [...data, plants];
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "GET_CART",
      payload: plants,
    });
  }

  function deleteShop(id) {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    data = data.filter((el) => el.id !== id);
    localStorage.setItem("cart", JSON.stringify(data));
    // cart();
  }
  // cart

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
    Task,
    oneTask: state.oneTask,
    cart,
    plants: state.plants,
    deleteShop,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
