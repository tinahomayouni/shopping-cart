import React from "react";
import ProductListing from "../features/product-listing";
import data from "../data/products.json";

export default function homepage(props) {
  return (
    <div>
      <h2>Here is HomePage</h2>
      <ProductListing products={data.products} />
    </div>
  );
}
