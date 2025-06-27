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
      style={{ border: "1px solid black", width: "120px", height: "20px" }}
      class="form-select"
      aria-label="Default select example"
    >
      <option selected>Category</option>
      <option value="all">All</option>
      <option value="house plants">House Plants</option>
      <option value="potter plants">Potter Plants</option>
      <option value="seeds">Seeds</option>
      <option value="small plants">Small Plants</option>
      <option value="big plants">Big Plants</option>
    </select>
  );
};

export default SelectShop;
