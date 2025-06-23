import React from "react";
import scss from "./Footer.module.scss";
import footer from "../../../assets/1.svg";
import email from "../../../assets/email.svg";
import measasge from "../../../assets/message.svg";
import phone from "../../../assets/phone.svg";
import chat from "../../../assets/Facebook.svg";
import chat1 from "../../../assets/Instagram.svg";
import chat3 from "../../../assets/Twitter.svg";
import chat2 from "../../../assets/Linkedin (1).svg";
import chat4 from "../../../assets/Union.svg";
import chat5 from "../../../assets/visa.svg";
import image from "../../../assets/iamge.svg";
import image1 from "../../../assets/flower3.svg";
import image2 from "../../../assets/flower4.svg";
const Footer = () => {
  return (
    <footer className="container">
      <div className={scss.container}>
        <div className={scss.block}>
          <div className={scss.box}>
            <div className={scss.cart}>
              <img src={image} alt="" />
            </div>
            <div className={scss.cart}>
              <img src={image1} alt="" />
            </div>
            <div className={scss.cart}>
              <img src={image2} alt="" />
            </div>
            <div className={scss.cart}>
              <h3>Would you like to join newsletters?</h3>
              <div className={scss.btn}>
                <input type="text" placeholder="enter your email address..." />
                <button>Join</button>
              </div>
              <h4>
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!
              </h4>
            </div>
          </div>
          <div className={scss.message}>
            <img src={footer} alt="" />
            <div className={scss.cart}>
              <img src={email} alt="" />
              <p>
                70 West Buckingham Ave. <br />
                Farmingdale, NY 11735
              </p>
            </div>
            <div className={scss.cart}>
              <img src={measasge} alt="" />
              <p>contact@greenshop.com</p>
            </div>
            <div className={scss.cart}>
              <img src={phone} alt="" />
              <p>+88 01911 717 490</p>
            </div>
          </div>
          <div className={scss.account}>
            <div className={scss.media}>
              <h3>My Account</h3>
              <p>My Account</p>
              <p>Our stores</p>
              <p>Contact us</p>
              <p>Career</p>
              <p>Specials</p>
            </div>
            <div className={scss.media}>
              <h3>Help & Guide</h3>
              <p>Help Center</p>
              <p>How to Buy</p>
              <p>Shipping & Delivery</p>
              <p>Product Policy</p>
              <p>How to Return</p>
            </div>
            <div className={scss.media}>
              <h3>Categories</h3>
              <p>House Plants</p>
              <p>Potter Plants</p>
              <p>Seeds</p>
              <p>Small Plants</p>
              <p>Accessories</p>
            </div>
            <div className={scss.cart1}>
              <h3>Would you like to join newsletters?</h3>
              <div className={scss.btn}>
                <input type="text" placeholder="enter your email address..." />
                <button>Join</button>
              </div>
              <h4>
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!
              </h4>
            </div>
            <div className={scss.message1}>
              <img className={scss.image} src={footer} alt="" />
              <div className={scss.cart}>
                <img src={email} alt="" />
                <p>
                  70 West Buckingham Ave. <br />
                  Farmingdale, NY 11735
                </p>
              </div>
              <div className={scss.cart}>
                <img src={measasge} alt="" />
                <p>contact@greenshop.com</p>
              </div>
              <br />
              <div className={scss.cart}>
                <img src={phone} alt="" />
                <p>+88 717 490</p>
              </div>
            </div>
            <div className={scss.media1}>
              <h3>Social Media</h3>
              <div className={scss.chat}>
                <img src={chat} alt="" />
                <img src={chat1} alt="" />
                <img src={chat2} alt="" />
                <img src={chat3} alt="" />
                <img src={chat4} alt="" />
              </div>
              <h3>We accept</h3>
              <img src={chat5} alt="" />
            </div>
          </div>
          <p style={{ display: "flex", justifyContent: "center" }}>
            © 2021 GreenShop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
