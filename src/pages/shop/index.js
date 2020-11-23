import React, { Component } from "react";
import SHOP_DATA from "../../model/static/shopData";

import CollectionPreview from "../../component/previewCollection";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { SHOP_DATA };
  }
  render() {
    const collections = this.state.SHOP_DATA;
    return (
      <div className="shop-page">
        {collections.map((collection) => (
          <div key={collection.id}>
            <CollectionPreview
              id={collection.id}
              title={collection.title}
              items={collection.items}
            ></CollectionPreview>
          </div>
        ))}
      </div>
    );
  }
}
