import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import util from "../util";
import { Icon, Button, Item } from "semantic-ui-react";

function Products(props) {

  console.log(props.favItems, "fav items from products");

  const productItems = props.products.map((product) => (

    <Card key={product.id}>
      <a
        href={`#${product.id}`}
        onClick={(e) => props.handleAddToCart(product.id)}
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
          <div className="product_card-container">
            <Button
              className="button_primary-color pet-button"
              onClick={() => props.handleAddToCart(product)}
            >
              <Icon name="add to cart" /> Add to cart
            </Button>

            {/* {props.favItems.id === product.id? <p>hi</p> : 
              
            } */}
            <Button
              className="fav_button"
              onClick={() => {
                props.handleAddToFav(product);
              }}
            >
              {product.favorited === "yes" ? (
                <Icon name="heart" size="large" />
              ) : (
                <Icon name="heart outline" size="large" />
              )}
            </Button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  ));
  return <ul id="list">{productItems}</ul>;
}

export default Products;
