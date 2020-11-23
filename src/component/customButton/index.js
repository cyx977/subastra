import React from "react";
import "./customButton.styles.scss";

export const CustomButton = ({ children, signinWithGoogle, ...otherProps }) => {
  return (
    <button
      className={`${signinWithGoogle ? "google-signin" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
