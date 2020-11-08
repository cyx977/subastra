import React from "react";
import "./menuItem.styles.scss";

export const MenuItem = ({ title, subtitle, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "cover"
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};
