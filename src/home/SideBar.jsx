import React from "react";
import scss from "./SideBar.module.scss";
import logo from "../assets/super.svg";
const SideBar = () => {
  return (
    <div className={scss.category}>
      <h2>Categories</h2>
      <div className={scss.colichestva}>
        <p>House Plants</p>
        <p>(22)</p>
      </div>
      <div className={scss.colichestva}>
        <p>Potter Plants</p>
        <p>(22)</p>
      </div>
      <div className={scss.colichestva}>
        <p>Seeds</p>
        <p>(22)</p>
      </div>
      <div className={scss.colichestva}>
        <p>Small Plants</p>
        <p>(22)</p>
      </div>
      <div className={scss.colichestva}>
        <p>Big Plants</p>
        <p>(22)</p>
      </div>
      <div className={scss.colichestva}>
        <p>Succulents</p>
        <p>(22)</p>
      </div>
      <div className={scss.colichestva}>
        <p>Trerrariums</p>
        <p>(22)</p>
      </div>
      <div className={scss.colichestva}>
        <p>Gardening</p>
        <p>(22)</p>
      </div>
      <div className={scss.colichestva}>
        <p>Accessories</p>
        <p>(22)</p>
      </div>
      ----------------------------------------- ui
      <h2>Size</h2>
      <div className={scss.colichestva}>
        <p>Small</p>
        <p>(22)</p>
      </div>
      <div className={scss.colichestva}>
        <p>Medium</p>
        <p>(22)</p>
      </div>
      <div className={scss.colichestva}>
        <p>Large</p>
        <p>(22)</p>
      </div>
      <img src={logo} alt="" />
    </div>
    // </div>
    // </div>
  );
};

export default SideBar;
