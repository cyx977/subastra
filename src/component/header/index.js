import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = (props) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link className="option" to="/contact"> CONTACT</Link>
      <Link className="option" to="signin">SIGN IN</Link>
    </div>
  </div>
);

export default Header;
