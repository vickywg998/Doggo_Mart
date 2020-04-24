import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import util from "../util";

const Basket = (props) => {
  console.log(props.cartItems, "from basket")
  return (
    <Alert variant="secondary">
      {props.cartItems.length === 0 ? (
        "Doggo Basket is empty"
      ) : (
        <div>
          <h3>
            {" "}
            You have {props.cartItems.length} different{" "}
            {props.cartItems.length > 1 ? "doggos" : "doggo"} to pet in the
            Doggo Basket.
          </h3>
        </div>
      )}
      {props.cartItems.length > 0 && (
        <div>
          <ul>
            {props.cartItems.map((item) => (
              <li key={item.id}>
                <b>{item.title}</b> X {item.count} = $ {item.price * item.count}
                <Button
                  className="button_primary-color"
                  onClick={() => props.handleRemoveFromCart(item)}
                >
                  X
                </Button>
              </li>
            ))}
          </ul>
          Total:{" "}
          {util.formatCurrency(
            props.cartItems.reduce((a, c) => a + c.price * c.count, 0)
          )}
        </div>
      )}
    </Alert>
  );
};

export default Basket;
