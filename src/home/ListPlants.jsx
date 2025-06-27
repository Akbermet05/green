import React, { useEffect } from "react";
import scss from "./ListPlants.module.scss";
import { useShop } from "../context/ProductContext";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import PaginationPost from "./PaginationPost";
import SelectShop from "../ui/select/SelectShop";
import { useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ListPlants = () => {
  const { readShop, data, deleteShop, selectedColor, setSelectedColor } =
    useShop();
  useEffect(() => {
    readShop();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className={scss.plants_block}>
        <div className={scss.category}>
          <div className={scss.all}>
            <h2>All Plants</h2>
            <h2>New Arrivals</h2>
            <h2>Sale</h2>
          </div>
          <SelectShop />
        </div>
        <div className={scss.box_plants}>
          {data.map((el, index) => (
            <div key={index} className={scss.plants}>
              <div className={scss.ion}>
                <IoSearchOutline
                  onClick={() => navigate(`/details/${el._id}`)}
                />
                <FiShoppingCart />
                <IoMdHeartEmpty />
                <AiOutlineDelete onClick={() => deleteShop(el._id)} />
              </div>
              <Zoom>
                <img src={el.link} alt="" />
              </Zoom>
              <h2>{el.name}</h2>
              <p>{el.plants}</p>
              <p>${el.price}</p>
            </div>
          ))}
        </div>
        <PaginationPost />
      </div>
    </div>
  );
};

export default ListPlants;
