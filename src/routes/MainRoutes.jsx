import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Create from "../components/layout/header/Create";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import DetailsPage from "../components/page/DetailsPage";
import CartPage from "../components/page/CartPage";

const MainRoutes = () => {
  let routes = [
    {
      link: "/",
      element: <Home />,
    },
    {
      link: "/create",
      element: <Create />,
    },
    {
      link: "/login",
      element: <Login />,
    },
    {
      link: "/register",
      element: <Register />,
    },
    { link: "/details/:id", element: <DetailsPage /> },
    { link: "/cart/:id", element: <CartPage /> },
  ];
  return (
    <Routes>
      {routes.map((el, index) => (
        <Route path={el.link} key={index} element={el.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
