import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import loading_doggo from "../assets/loading_doggo.gif";
import confirmation_doggo from "../assets/confirmation_doggo.gif";

const Confirmation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loading_animation = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(loading_animation);
  }, []);

  return (
    <Container fluid="md">
      <Row className="overall-page_height">
        <Col>
          {loading ? (
            <div className="loading-container">
              <img src={loading_doggo} />
              <h1>Processing...</h1>
            </div>
          ) : (
            <div className="confirmation-container">
              <h1>Thank you for your order!</h1>
              <div className="confirmation-icon-container">
                <Icon name="check circle" size="huge"></Icon>
              </div>
              <img src={confirmation_doggo} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Confirmation;
