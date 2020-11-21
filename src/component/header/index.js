import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { logout } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  console.log("currentUser",currentUser);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          // <Link className="option" onClick={logout}>
          //   SIGN OUT
          // </Link>
          <Link to="" className="option" onClick={logout}>
            LOGOUT
          </Link>
        ) : (
          <Link className="option" to="signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const stateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(stateToProps)(Header);
