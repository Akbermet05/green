import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { API } from "../helpers/const";
const productContext = createContext();
export const useShop = () => useContext(productContext);

const initialState = {
  value: [],
  oneTask: {},
  plants: JSON.parse(localStorage.getItem("basket")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, value: action.payload };
    case "GET_TASK":
      return { ...state, oneTask: action.payload };
    case "INCREMENT":
      return {
        ...state,
        plants: state.plants.map((item) =>
          item._id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        plants: state.plants.map((item) =>
          item._id === action.payload && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };
    case "GET_CART":
      const newCart = [...state.plants, action.payload];
      localStorage.setItem("basket", JSON.stringify(newCart));
      return { ...state, plants: newCart };

    case "REMOVE":
      const filtered = state.plants.filter(
        (item) => item._id !== action.payload
      );
      localStorage.setItem("basket", JSON.stringify(filtered));
      return { ...state, plants: filtered };
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

  // cart
  const addToCart = (add) => {
    dispatch({
      type: "GET_CART",
      payload: add,
    });
  };
  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
    // localStorage.setItem("basket", JSON.stringify(state.plants))
  };

  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
    // localStorage.setItem("basket", JSON.stringify(state.plants))
  };
  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };
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
    addToCart,
    state,
    increment,
    decrement,
    removeFromCart,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
