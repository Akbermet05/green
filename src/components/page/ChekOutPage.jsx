import React from "react";
import scss from "./ChekOutPage.module.scss";
const ChekOutPage = () => {
  return (
    <div className="container">
      <h1>Billing Address</h1>
      <di   v className={scss.chek}>
        <div className={scss.name}>
          <p>First Name *</p>
          <input type="text" />
        </div>
        <br />
        <div className={scss.name}>
          <p>Country / Region *</p>
          <input type="text" />
        </div>
        <br />
        <div className={scss.name}>
          <p>Street Address *</p>
          <input type="text" />
        </div>
        <br />
        <div className={scss.name}>
          <p>State *</p>
          <input type="text" />
        </div>
        <br />
        <div className={scss.name}>
          <p>Email address *</p>
          <input type="text" />
        </div>
        <br />
        <p> Ship to a different address?</p>
      </di>
    </div>
  );
};

export default ChekOutPage;
