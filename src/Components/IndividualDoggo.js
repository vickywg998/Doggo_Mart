import React, { useState } from "react";
import { Link } from "react-router-dom";

import {Row, Col, Container, Button } from "react-bootstrap";



const Cart = () => {
 
  return (
    <Container>
      <Row className="overall-page_height">
        <Col xs={7}>
          <Link to="/">
            <Button className="cart__page-left-title">
              ← Back to Shopping
            </Button>
          </Link>
      
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
