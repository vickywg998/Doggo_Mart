import React, { useState } from "react";
import {Row, Col, Container, Button} from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { useFavItems } from "../Hooks/useFavItems";
import { useUpdateFavItems } from "../Hooks/useUpdateFavItems";

const Favorite = () => {
  const [favItems, setFavItems] = useState(useFavItems());
  console.log(favItems, "loading from favorite.js");

  const myFavUpdatingFunction = useUpdateFavItems();

  const updateFavItemsWithHook = (newFavItems) => {
    setFavItems(newFavItems);
    myFavUpdatingFunction(newFavItems);
  };

  const handleAddToFav = (favItem) => {
    const productInFav = favItems.find((item) => item.id === favItem.id);

    let newFavItems = [...favItems];
    if (productInFav) {
      productInFav.favorited = "no";
      newFavItems = favItems.filter((a) => a.id !== favItem.id);
    } else {
      const newFavItem = favItem;
      newFavItem.favorited = "yes";
      newFavItems = favItems.concat(newFavItem);
    }
    updateFavItemsWithHook(newFavItems);
  };

  return (
    <Container>
      <Row className="overall-page_height">
        <Col xs={9}>
          {favItems.length === 0 ? (
            "You don't have any favorite doggos yet. Please give them some love <3"
          ) : (
            <h3>
              Woohoo, you favorited {favItems.length} 
              {favItems.length > 1 ? "different doggos" : "doggo"}! :)
            </h3>
          )}
          <div className="cart__cart-list">
            {favItems.length > 0 && (
              <>
                {favItems.map((item) => (
                  <div className="cart__line-item">
                    <div className="cart-item-content-container">
                      <div className="cart__product-image-container">
                        <img
                          className="cart__img"
                          src={`${process.env.PUBLIC_URL}/products/${item.sku}.jpg`}
                          alt={item.title}
                        />
                      </div>
                      <div className="cart__line-item-info-container">
                        <div className="cart__line-item-info-heading">
                          <span
                            key={item.id}
                            className="cart__line-item-info-title"
                          >
                            {item.title}
                          </span>

                          <Button
                          className="button_primary-color"
                            onClick={() => {
                              handleAddToFav(item);
                            }}
                          >
                            {item.favorited === "yes" ? (
                            <p>remove</p>
                            ) : (
                              <Icon name="heart outline" size="large" />
                            )}
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
