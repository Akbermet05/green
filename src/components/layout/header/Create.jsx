import React, { useState } from "react";
import scss from "./Create.module.scss";
import { useShop } from "../../../context/ProductContext";
import { Link } from "react-router-dom";
const Create = () => {
  const { addShop } = useShop();
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div className="container">
      <div className={scss.create}>
        <h1>CREATE HEAR</h1>
        <br />
        <input
          onChange={(e) => setLink(e.target.value)}
          type="text"
          placeholder="Image link"
        />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="price"
        />
        {/* <Link to="/home"> */}
          <button
            onClick={() =>
              addShop({
                link: link,
                name: name,
                price: price,
              })
            }
          >
            create
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Create;
