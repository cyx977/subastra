// import React, { Component } from "react";
import "./collectionItem.styles.scss";
import { CustomButton } from "../customButton";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cartAction";

const CollectionItem = (props) => {
  const {
    item: { id, imageUrl, name, price },
    addToCart,
  } = props;
  // const { id, imageUrl, name, price } = item;

  return (
    <div className="collection-item" key={id}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="span">{price}</span>
      </div>

      <CustomButton
        onClickfx={() =>
          addToCart({
            id,
            name,
            price,
          })
        }
        inverted
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

// class CollectionItem extends Component {
//   render() {
//     console.log("collection items ko props", this.props);
//     const { id, name, price, imageUrl, addToCart } = this.props;
//     return (
//       <div className="collection-item" key={id}>
//         <div
//           className="image"
//           style={{
//             backgroundImage: `url(${imageUrl})`,
//           }}
//         ></div>
//         <div className="collection-footer">
//           <span className="name">{name}</span>
//           <span className="span">{price}</span>
//         </div>

//         <CustomButton inverted>Add to Cart</CustomButton>
//       </div>
//     );
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
// export default CollectionItem;
