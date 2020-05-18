import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartItems } from "./Hooks/useCartItems";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import util from "../util";
import { useUpdateCartItems } from "./Hooks/useUpdateCartItems";

const Cart = () => {
  const [cartItems, setCartItems] = useState(useCartItems());
  console.log(cartItems, "loading from cart.js");

  const myCartUpdatingFunction = useUpdateCartItems();

  const updateCartItemsWithHook = (newCartItems) => {
    setCartItems(newCartItems);
    myCartUpdatingFunction(newCartItems);
  };

  const handleRemoveFromCart = (product) => {
    const removedCartItems = cartItems.filter((a) => a.id !== product.id);
    updateCartItemsWithHook(removedCartItems);
  };

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
                        {/* <div className="cart__product-button"> */}
                        <img
                          className="cart__img"
                          src={`/products/${item.sku}.jpg`}
                          alt={item.title}
                        />
                        {/* </div> */}
                      </div>
                      <div className="cart__line-item-info-container">
                        <div className="cart__line-item-info-heading">
                          <span
                            key={item.id}
                            className="cart__line-item-info-title"
                          >
                            <b>{item.title}</b> X {item.count} = ${" "}
                            {item.price * item.count}
                          </span>

                          <Button
                            className="button_primary-color cart__line-item-x-button"
                            onClick={() => handleRemoveFromCart(item)}
                          >
                            X
                          </Button>
                        </div>
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

        <Col xs={4}>
          <div className="order_summary_container">
            <div id="order-details">
              <Table className="order-summary">
                <tbody>
                  <tr>
                    <th colSpan="2">Order Summary</th>
                  </tr>

                  <tr>
                    <td> Total</td>
                    <td>
                      {util.formatCurrency(
                        cartItems.reduce((a, c) => a + c.price * c.count, 0)
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td> Shipping</td>
                    <td>FREE</td>
                  </tr>
                  <tr className="order-summary__total">
                    <td> Subtotal</td>
                    <td>
                      {util.formatCurrency(
                        cartItems.reduce((a, c) => a + c.price * c.count, 0)
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
