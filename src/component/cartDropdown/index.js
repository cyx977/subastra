import "./cartDropdown.styles.scss";
import React from "react";
import { CustomButton } from "../customButton";

export const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);
