import React from "react";
import "./collectionItem.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="collection-footer">
      <span className='name'>{name}</span>
      <span className='span'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
