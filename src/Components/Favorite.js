

import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useFavItems } from "./Hooks/useFavItems";
import { useUpdateFavItems } from "./Hooks/useUpdateFavItems";


const Favorite = () => {
  const [favItems, setFavItems] = useState(useFavItems());
  console.log(favItems, "loading from favorite.js");

  const myFavUpdatingFunction = useUpdateFavItems();

  const updateFavItemsWithHook = (newFavItems) => {
    setFavItems(newFavItems);
    myFavUpdatingFunction(newFavItems);
  };

  // const handleRemoveFromCart = (product) => {
  //   const removedCartItems = cartItems.filter((a) => a.id !== product.id);
  //   updateCartItemsWithHook(removedCartItems);
  // };

  return (
    <Container>
      <Row>
        <Col xs={9}>
          {favItems.length === 0 ? (
            "You don't have any favorite doggos yet. Please give them some love <3"
          ) : (
            <h3>
            
              Woohoo, you favorited {favItems.length} different{" "}
              {favItems.length > 1 ? "doggos" : "doggo"}! :)
            </h3>
          )}
          <div className="cart__cart-list">
            {favItems.length > 0 && (
              <>
                {favItems.map((item) => (
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
                           information
                          </span>

                          <Button
                            className="button_primary-color cart__line-item-x-button"
                            // onClick={() => handleRemoveFromCart(item)}
                          >
                            X
                          </Button>
                        </div>
                      </div>
               
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default Favorite;



