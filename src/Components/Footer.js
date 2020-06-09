import React from "react";
import { Icon } from "semantic-ui-react";
import { Container, Row, Col } from "react-bootstrap"; 

const footerStyle = {
  background: "#ffffff",
  color: "#414b5a",
  padding: "10px 0px 10px 0px",
  fontSize: "14px",
  letterSpacing: "0.015em",
  position: "absolute",
  right: "0px",
  left: "0px"
};

const Footer = () => (
  <footer style={footerStyle}>
    <Container>
      <Row>
        <Col>
          <h5>COMPANY</h5>
          <ul>
            <li>Our Story</li>
            <li>Our Team</li>
            <li>Our Careers</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
          </ul>
        </Col>
        <Col>
          <h5>LEARN MORE</h5>
          <ul>
            <li>How It Works</li>
            <li>Help/FAQs</li>
            <li>Our Values</li>
            <li>#petdoggo Blog</li>
          </ul>
        </Col>
        <Col>
          <h5>CONNECT WITH US</h5>
          <Icon name="facebook square" />
          <Icon name="twitter square" />
          <Icon name="instagram" />
          <Icon name="youtube square" />
        </Col>
        <Col>
          <h5>© Copyright 2020 Doggo.</h5>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
