import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import util from "../util";
import { Icon, Button } from "semantic-ui-react";


function Products(props) {
  const productItems = props.products.map((product) => (
    <Card key={product.id}>
      <a
        href={`#${product.id}`}
        onClick={(e) => props.HandleAddToCart(product.id)}
      >
        <Card.Img
          className="card-img-top"
          src={`/products/${product.sku}.jpg`}
          alt={product.title}
        />
      </a>
      <Card.Body>
        <Card.Title>
          <b>{util.formatCurrency(product.price)}</b>
        </Card.Title>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
       
            <Button
              className="button_primary-color pet-button"
              onClick={() => props.HandleAddToCart(product)}
            >
              <Icon name="add to cart" /> Add to cart
            </Button>
       
        </Card.Text>
      </Card.Body>
    </Card>
  ));
  return <ul id="list">{productItems}</ul>;
}

export default Products;
