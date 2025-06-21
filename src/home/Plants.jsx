import React from "react";
import logo from "../assets/21.png";
import logo1 from "../assets/plantsq.svg";
import scss from "./Plants.module.scss";
const Plants = () => {
  return (
    <div className="container">
      <div className={scss.plants}>
        <div className={scss.plants_block}>
          <img src={logo} alt="" />
          <div className={scss.plants_box}>
            <h1>Summer cactus & succulents</h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <button>Find more</button>
          </div>
        </div>
        <div className={scss.plants_block}>
          <img src={logo1} alt="" />
          <div className={scss.plants_box}>
            <h1>Styling Trends & much more</h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <button>Find more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plants;
