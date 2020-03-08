import React from "react";

export default function ProductListItem(props) {
  console.log(props, "proppps");
  return (
    <div className="product-list-item">
      <h3>{props.product.name}</h3>
      <img height={100} src={`/products/${props.product.image}`} />
      <div>{props.product.description}</div>
      <div>$ {props.product.price}</div>
      <div>
        <button onClick={() => props.addToCart(props.product)}>
          add to card ({props.quantity ? props.quantity : 0})
        </button>
      </div>
    </div>
  );
}
