// import React, { useEffect, useState } from "react";
// import logo from "../../../assets/1.svg";
// import { IoSearchOutline } from "react-icons/io5";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoIosLogOut } from "react-icons/io";
// import scss from "./Header.module.scss";
// import { CiMenuBurger } from "react-icons/ci";
// import { FaTimes } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useShop } from "../../../context/ProductContext";
// const Header = () => {
//   const { searchValue, setSearchValue, readShop } = useShop();
//   useEffect(() => {
//     readShop();
//   }, [searchValue]);
//   const navigate = useNavigate();
//   const [state, setState] = useState(false);
//   return (
//     <header className="container">
//       <div className={scss.header}>
//         <img src={logo} alt="" />
//         <div className={scss.burger} onClick={() => setState(!state)}>
//           {state ? <FaTimes /> : <CiMenuBurger />}
//         </div>
//         <nav className={`${scss.nav}${state ? scss.active : ""}`}>
//           <Link to="/">
//             <a href="">Home</a>
//           </Link>
//           <a href="#">Shop</a>
//           <a href="#">Plant Care</a>
//           <a href="#">Blogs</a>
//           <Link to="/create">
//             <p>+</p>
//           </Link>
//         </nav>
//         <div className={scss.ion}>
//           <input
//             onChange={(e) => setSearchValue(e.target.value)}
//             value={searchValue}
//             type="text"
//             placeholder="search"
//           />
//           <IoSearchOutline className={scss.search} />
//           <FiShoppingCart className={scss.shop} />
//           <span onClick={() => navigate("/login")}>
//             <IoIosLogOut /> login
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../../assets/1.svg";
import { Link } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaTimes, FaBars, FaPlus } from "react-icons/fa";
import { useShop } from "../../../context/ProductContext";
import { useEffect } from "react";
import { LuShoppingCart } from "react-icons/lu";

// import { usePlants } from "../../context/ProductContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { searchValue, setSearchValue, readShop } = useShop();
  useEffect(() => {
    readShop();
  }, [searchValue]);
  return (
    <div className="container">
      <div className={scss.header}>
        <div className={scss.logo}>
          <img src={logo} alt="Greenshop Logo" />
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
        </nav>

        <div className={scss.actions}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={scss.searchinput}
            placeholder="Search..."
          />
          <p className={scss.icon}>
            <LuShoppingCart size={20} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
