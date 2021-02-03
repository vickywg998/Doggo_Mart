import React from "react";
import Product from "./Product";

function Products(props) {
  const productItems = props.products.map((product) => (
    <Product
      key={product.id}
      product={product}
      handleAddToCart={props.handleAddToCart}
      handleAddToFav={props.handleAddToFav}
    />
  ));

  return <ul id="list">{productItems}</ul>;
}

export default Products;
