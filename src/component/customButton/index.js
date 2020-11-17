import React from "react";
import "./customButton.styles.scss";

const CustomButton = ({ children, signinWithGoogle, ...otherProps }) => {
  return (
    <button
      className={`${signinWithGoogle ? "google-signin" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
