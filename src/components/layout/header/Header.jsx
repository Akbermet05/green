import React, { useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../../assets/1.svg";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaPlus } from "react-icons/fa";
import { useShop } from "../../../context/ProductContext";
import { useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { searchValue, setSearchValue, readShop, state } = useShop();
  useEffect(() => {
    readShop();
  }, [searchValue]);
  return (
    <div className="container">
      <div className={scss.header}>
        <div className={scss.logo}>
          <img src={logo} alt="Greenshop Logo" />
        </div>

        <div className={scss.ion1}>
          <Link to="/cart">🛒 ({state.plants.length})</Link>
        </div>
        <button className={scss.burger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`${scss.nav} ${menuOpen ? scss.active : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/place">Plant Care</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/create">
            <FaPlus />
          </Link>
          <Link to="/login">
            <button className={scss.btn}>Login</button>
          </Link>
        </nav>

        <div className={scss.actions}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={scss.searchinput}
            placeholder="Search..."
          />

          <div className={scss.ion}>
            <Link to="/cart">🛒 ({state.plants.length})</Link>
          </div>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
