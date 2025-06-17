import React, { useEffect } from "react";
import scss from "./ListPlants.module.scss";
import { useShop } from "../context/ProductContext";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const ListPlants = () => {
  const { readShop, data, deleteShop } = useShop();
  useEffect(() => {
    readShop();
  }, []);
  return (
    <div className="container">
      <div className={scss.plants_block}>
        <div className={scss.all}>
          <h2>All Plants</h2>
          <h2>New Arrivals</h2>
          <h2>Sale</h2>
        </div>
        <div className={scss.box_plants}>
          {data.map((el, index) => (
            <div key={index} className={scss.plants}>
              <div className={scss.ion}>
                <IoSearchOutline />
                <FiShoppingCart />
                <IoMdHeartEmpty />
                <AiOutlineDelete onClick={() => deleteShop(el._id)} />
              </div>
              {/* <div className={scss.ion}>
              <IoSearchOutline />
              <FiShoppingCart />
              <IoMdHeartEmpty />
              </div> */}
              <img src={el.link} alt="" />
              <h2>{el.name}</h2>
              <p>${el.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPlants;
