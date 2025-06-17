import React from "react";
import scss from "./Home.module.scss";
import logo1 from "../assets/0.svg";
const HomeBaner = () => {
  return (
    <div className="container">
      <div className={scss.home_box}>
        <div className={scss.home}>
          <h3>Welcome to GreenShop</h3>
          <h1>
            Let’s Make a Better <span>Planet</span>
          </h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <br />
          <button>SHOP NOW</button>
        </div>
        <img src={logo1} alt="" />
      </div>
    </div>
  );
};

export default HomeBaner;
