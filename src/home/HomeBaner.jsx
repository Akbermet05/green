import React from "react";
import scss from "./Home.module.scss";
import logo1 from "../assets/0.svg";
import HeroText from "../ui/HeroText/HeroText";
const HomeBaner = () => {
  return (
    <div className="container">
      <div className={scss.home_box}>
        <div className={scss.home}>
          <h3>Welcome to GreenShop</h3>
          {/* <h1 className="animation">
            Let’s Make a Better <span>Planet</span>
          </h1> */}
          <h1>
            <HeroText />
          </h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
            <span style={{ color: "grey" }}>
              Use our plants to create an unique Urban Jungle. Order your
              favorite plants!
            </span>
          </p>
          {/* <br /> */}
          <button>SHOP NOW</button>
        </div>
        <img src={logo1} alt="" />
      </div>
    </div>
  );
};

export default HomeBaner;
