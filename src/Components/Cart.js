import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartItems } from "./Hooks/useCartItems";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import util from "../util";

const Cart = () => {
  const [cartItems, setCartItems] = useState(useCartItems());
  console.log(cartItems, "loading from cart.js");
  return (
    <Container>
      <Row>
        <Col xs={7}>
          <Link to="/">
            <Button className="cart__page-left-title">
              ← Back to Shopping
            </Button>
          </Link>
          {cartItems.length === 0 ? (
            "Doggo Basket is empty"
          ) : (
            <h3>
              {" "}
              You have {cartItems.length} different{" "}
              {cartItems.length > 1 ? "doggos" : "doggo"} to pet in the Doggo
              Basket.
            </h3>
          )}
          <div className="cart__cart-list">
            {cartItems.length > 0 && (
              <>
                {cartItems.map((item) => (
                  <div className="cart__line-item">
                    <div className="cart-item-content-container">
                      <div className="cart__product-image-container">
                        <div className="cart__product-button">
                          <img
                            className="cart__img"
                            src={`/products/${item.sku}.jpg`}
                            alt={item.title}
                          />
                        </div>
                      </div>
                      <div className="cart__line-item-info-container">
                    
                          <div
                            key={item.id}
                            className="cart__line-item-info-title"
                          >
                            <b>{item.title}</b> X {item.count} = ${" "}
                            {item.price * item.count}
                          </div>
                          
                          <Button
                            className="button_primary-color cart__line-item-x-button"
                            // onClick={() => handleRemoveFromCart(item)}
                          >
                            X
                          </Button>
                    
                      </div>
                      {/* <div>
                        {" "}
                        <p className="cart__line-item-info-title">
                          {item.description}
                        </p>
                      </div> */}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </Col>

        <Col xs={3}>
          <p>Order Summary</p>
          <p>
            Total:{" "}
            {util.formatCurrency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0)
            )}
          </p>
        </Col>
      </Row>

      {cartItems.length === 0 ? "Doggo Basket is empty" : <div></div>}
    </Container>
  );
};

export default Cart;
