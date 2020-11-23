import React from "react";
import CollectionItem from "../collectionItem";

import "./previewComponent.styles.scss";

const CollectionPreview = ({ title, items, id }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item, index) => (
          <CollectionItem key={`${index}-${id}`} item={item}></CollectionItem>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
