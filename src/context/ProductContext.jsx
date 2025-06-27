import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { API } from "../helpers/const";
const productContext = createContext();
export const useShop = () => useContext(productContext);

const initialState = {
  value: [],
  oneTask: {},
  // plants: JSON.parse(localStorage.getItem("basket")) || [],
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
  // function cart(plants) {
  //   const data = JSON.parse(localStorage.getItem("cart")) || [];
  //   const cart = [...data, plants];
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   dispatch({
  //     type: "GET_CART",
  //     payload: plants,
  //   });
  // }
  // function deleteShop(id) {
  //   const data = JSON.parse(localStorage.getItem("cart")) || [];
  //   const no = data.filter((el) => el._id !== id);
  //   localStorage.setItem("cart", JSON.stringify(no));
  //   dispatch({
  //     type: "GET_CART",
  //     payload: no,
  //   });
  // }

  // function addProductToCard(product) {
  //   let card = JSON.parse(localStorage.getItem("card"));
  //   if (!card) {
  //     card = {
  //       products: [],
  //       totalPrice: 0,
  //     };
  //   }
  //   let newProduct = {
  //     item: product,
  //     count: 1,
  //     subPrice: +product,
  //   };
  //   card.products.push(newProduct);
  //   localStorage.setItem("card", JSON.stringify(card));
  // }
  // cart

  const [basket, setBasket] = useState([]);

  const addToCart = (add) => {
    setBasket([...basket, add]);
    readShop();
  };
  const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);
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
    // plants: state.plants,
    // cart,
    basket,
    addToCart,
    totalPrice,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
