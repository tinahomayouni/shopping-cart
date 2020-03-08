import React from "react";
import ProductListItem from "./product-list-item";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/actions";
import { useSelector, useDispatch } from "react-redux";

function ProductListing(props) {
  console.log(props);
  const cart = useSelector(state => state.cart); // same as mapStateToProps
  const quantities = useSelector(state => state.cart.quantities); // same as mapStateToProps

  const dispatch = useDispatch(); // same as mapDispatchToProps

  console.log(quantities[3], "quantities");

  return (
    <div className="product-list">
      {props.products.map(product => {
        console.log(product);
        console.log(quantities[product.id], "quantities[product.id]");
        return (
          <ProductListItem
            product={product}
            quantity={quantities[product.id]}
            addToCart={product => dispatch(addToCart(product))}
          />
        );
      })}
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
// export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
export default ProductListing;
