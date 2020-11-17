import React from "react";
import "./menuItem.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  size,
  history,
  match,
  linkUrl,
}) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
