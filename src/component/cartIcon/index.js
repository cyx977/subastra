import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.styles.scss";

import { toggleVisibility } from "../../redux/cart/cartAction";

const CartIcon = ({ hidden, toggleVisibility }) => {
  return (
    <div className="cart-icon" onClick={toggleVisibility}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">0</span>
    </div>
  );
};

// const mapStateToProps = (state) => ({ hidden: state.cart.hidden });
const mapStateToProps = ({ cart: { hidden } }) => ({ hidden: hidden });

const mapDispatchToProps = (dispatch) => ({
  toggleVisibility: () => dispatch(toggleVisibility),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
