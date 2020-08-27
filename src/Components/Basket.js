import React from "react";
import {Alert, Button} from "react-bootstrap";
import util from "../util";

const Basket = (props) => {

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
          <ul className="basket_list">
            {props.cartItems.map((item) => (
              <li key={item.id} className="basket_list-padding">
                <span><b>{item.title}</b> X {item.count} = $ {util.formatCurrency(item.price * item.count)}</span>
                <Button
                  className="button_primary-color remove-button"
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
