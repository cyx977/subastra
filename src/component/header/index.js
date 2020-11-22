import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { logout } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const Header = ({ currentUser }) => {
  const history = useHistory();
  console.log("currentUser from header ", currentUser);
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
        {currentUser?.currentUser != null ? (
          <Link to="/" className="option" onClick={async () => await logout()}>
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

const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(Header);
