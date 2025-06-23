import React, { useEffect } from "react";
import { useShop } from "../../context/ProductContext";
import scss from "./CartPage.module.scss";
import { MdOutlineDeleteOutline } from "react-icons/md";
import logo from "../../assets/4.svg";
const CartPage = () => {
  const { plants, deleteShop } = useShop();

  return (
    <div className="container">
      {/* <div className={scss.cart_box}>
            <h3>Products</h3>
            <div className={scss.box}>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Total</h3>
            </div>
            <h3>Cart Totals</h3>
          </div> */}
      <div className={scss.cart_box}>
        <div className={scss.box_image}>
          <img src={plants.link} alt="" />
          <div className={scss.block}>
            <h3>{plants.name}</h3>
            <p>SKU:1995751877966</p>
          </div>
        </div>
        <p>{plants.price}$</p>
        <div className={scss.count}>
          <p>+</p>
          <h3>1</h3>
          <p>-</p>
        </div>
        <div className={scss.ion}>
          <p>$238.00</p>
          <span>
            <MdOutlineDeleteOutline onClick={() => deleteShop(plants.id)} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
