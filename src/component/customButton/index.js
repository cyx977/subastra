import React from "react";
import "./customButton.styles.scss";

export const CustomButton = ({
  children,
  signinWithGoogle,
  inverted,
  onClickfx,
  ...otherProps
}) => {
  return (
    <button
      onClick={onClickfx}
      className={`${inverted ? "inverted" : ""} ${
        signinWithGoogle ? "google-signin" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
