import React, { useEffect } from "react";
import { useShop } from "../../context/ProductContext";

const SelectShop = () => {
  const { setSelectedColor, readShop, selectedColor } = useShop();
  useEffect(() => {
    readShop();
  }, [selectedColor]);

  return (
    <select
      onChange={(e) => setSelectedColor(e.target.value)}
      style={{
        border: "2px solid grey",
        width: "130px",
        height: "30px",
        borderRadius: "10px",
      }}
      className="form-select"
      aria-label="Default select example"
    >
      <option select>Category</option>
      <option value="all">All</option>
      <option value="house plants">House Plants</option>
      <option value="potter plants">Potter Plants</option>
      <option value="seeds">Seeds</option>
      <option value="small plants">Small Plants</option>
      <option value="big plants">Big Plants</option>
      <option value="fake">Fake</option>
    </select>
  );
};

export default SelectShop;
