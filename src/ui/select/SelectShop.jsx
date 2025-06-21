import React, { useState } from "react";
// import "./index.scss";
import { Select } from "antd";

const OPTIONS = [
  "House Plants",
  "Potter Plants",
  "Seeds",
  "Small Plants",
  "Big Plants",
  "Gardening",
];

const SelectShop = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredOptions = OPTIONS.filter((el) => !selectedItems.includes(el));

  return (
    <Select
      // mode="multiple"
      placeholder="category flower"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{ width: "30%", height: "20%" }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};

export default SelectShop;
