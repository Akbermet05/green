import React, { useEffect } from "react";
import { useShop } from "../../context/ProductContext";
import scss from "./CartPage.module.scss";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { state, increment, decrement, removeFromCart } = useShop();

  const totalPrice = state.plants.reduce((acc, item) => {
    const cleanPrice = parseFloat(item.price.toString().replace(/[^\d.]/g, ""));
    const quantity = item.count || 1;
    return acc + cleanPrice * quantity;
  }, 0);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.plants));
  }, [increment, decrement]);
  return (
    <motion.div>
      <div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <br />
        <h2>Cart Details</h2>
        <div className={scss.plants_box}>
          <div className={scss.cart_box1}>
            <AnimatePresence>
              {state.plants.map((el, index) => (
                <motion.div>
                  <div
                    key={index}
                    className={scss.cart_box}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <p>Product</p>
                      <div className={scss.box_image}>
                        <img src={el.link} alt={el.name} />
                        <div className={scss.block}>
                          <h3>{el.name}</h3>
                          <p>SKU: 1995751877966</p>
                        </div>
                      </div>
                    </div>
                    <p>{el.price}$</p>
                    <div className={scss.count}>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => decrement(el._id)}
                      >
                        -
                      </motion.button>
                      <span>{el.count}</span>
                      <button onClick={() => increment(el._id)}>+</button>
                      <button onClick={() => removeFromCart(el._id)}>
                        <MdOutlineDeleteOutline />
                      </button>
                    </div>
                    <div className={scss.ion}>
                      <p>
                        Total:${(parseFloat(el.price) * el.count).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className={scss.total}>
            <h2>Cart Totals</h2>
            <p>Coupon Apply</p>
            <div className={scss.input}>
              <input type="text" placeholder="Enter coupon code here..." />
              <button>Apply</button>
            </div>
            <br />
            <div className={scss.Subtotal}>
              <p>Subtotal:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className={scss.btn}>
              <Link to="/chek">
                <button>Proceed To Checkout</button>
              </Link>
              <h3>Continue Shopping</h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;
