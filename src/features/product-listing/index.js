import React from "react";
import ProductListItem from "./product-list-item";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/actions";

function ProductListing(props) {
  console.log(props);
  return (
    <div className="product-list">
      {props.products.map(product => (
        <ProductListItem product={product} addToCart={props.addToCart} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     addToCart: item => {
//       dispatch({ type: "ADD", payload: item });
//     },
//     removeFromCart: item => {
//       dispatch({ type: "REMOVE", payload: item });
//     }
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addToCart(product)),
    removeFromCart: productId => dispatch(removeFromCart(productId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
