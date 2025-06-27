import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ProductContext";
import scss from "./CartPage.module.scss";
import { MdOutlineDeleteOutline } from "react-icons/md";
const CartPage = () => {
  const { deleteShop, totalPrice, basket } = useShop();
  useEffect(() => {
    // readBasket();
  }, []);

  return (
    <div className="container">
      <p>Details</p>
      <div className={scss.plants_box}>
        <div className={scss.cart_box1}>
          {basket.map((el, index) => (
            <div key={index} className={scss.cart_box}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                className=""
              >
                <p>product</p>
                <div className={scss.box_image}>
                  <img src={el.link} alt="" />
                  <div className={scss.block}>
                    <h3>{el.name}</h3>
                    <p>SKU:1995751877966</p>
                  </div>
                </div>
              </div>
              <p>{el.price}$</p>
              <div className={scss.count}>
                <p>+</p>
                <h3>1</h3>
                <p>-</p>
              </div>
              <div className={scss.ion}>
                <p>$ 0</p>
                <span>
                  <MdOutlineDeleteOutline onClick={() => deleteShop(el._id)} />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={scss.total}>
          <h2>Cart Totals</h2>
          <p>Coupon Apply</p>
          <div className={scss.input}>
            <input type="text" placeholder="Enter coupon code here..." />
            <button>Apply</button>
          </div>
          {/* <br /> */}
          <div className={scss.Subtotal}>
            <p>Subtotal: {totalPrice}</p>
            <p>$$2,683.00</p>
          </div>
          <div className={scss.Subtotal}>
            <p>Subtotal</p>
            <p>$$2,683.00</p>
          </div>
          <div className={scss.Subtotal}>
            <p>Subtotal</p>
            <p>$$2,683.00</p>
          </div>
          <div className={scss.Subtotal}>
            <p>Subtotal</p>
            <p>$890</p>
          </div>
          <div className={scss.btn}>
            <button>Proceed To Checkout</button>
            <h3>Continue Shopping</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
