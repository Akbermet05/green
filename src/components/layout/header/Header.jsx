import React from "react";
import logo from "../../../assets/1.svg";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import scss from "./Header.module.scss";
import { CiMenuBurger } from "react-icons/ci";

import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="container">
      <div className={scss.header}>
        <img src={logo} alt="" />
        <nav>
          <Link to="/">
            <a href="">Home</a>
          </Link>
          <a href="#">Shop</a>
          <a href="#">Plant Care</a>
          <a href="#">Blogs</a>
          <Link to="/create">
            <p>+</p>
          </Link>
        </nav>
        <div className={scss.ion}>
          <input type="text" placeholder="search" />
          <IoSearchOutline className={scss.search} />
          <FiShoppingCart className={scss.shop} />
          <span onClick={() => navigate("/login")}>
            <IoIosLogOut /> login
          </span>
        </div>
        <div className={scss.burger}>
          <CiMenuBurger />
        </div>
      </div>
    </header>
  );
};

export default Header;
