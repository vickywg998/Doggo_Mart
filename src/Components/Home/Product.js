import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import util from "../Cart/priceUtil";
import { Icon, Button } from "semantic-ui-react";

function Product(props) {
  const [modalShow, setModalShow] = useState(false);

  const product = props.product;

  return (
    <>
      <Card key={product.id}>
        <Card.Img
          className="card-img-top"
          src={`${process.env.PUBLIC_URL}/products/${product.sku}.jpg`}
          alt={product.title}
          onClick={() => {
            setModalShow(true);
          }}
        />
        <Card.Body>
          <Card.Title>
            <b>{util.formatCurrency(product.price)}</b>
          </Card.Title>
          <Card.Title>{product.title}</Card.Title>

          <div className="product_card-container">
            <Card.Text>
              <Button
                className="button_primary-color pet-button"
                onClick={() => props.handleAddToCart(product)}
              >
                <Icon name="add to cart" /> Add to cart
              </Button>

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
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
      
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {product.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{product.id}</h4>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + `/products/${product.sku}.jpg`}
            alt={product.title}
          />
          <p>{product.price}</p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Product;