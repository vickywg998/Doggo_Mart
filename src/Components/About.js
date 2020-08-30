import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Animated } from "react-animated-css";
import AboutImage from "../assets/about_image.jpg";

const About = () => {

  return (
    <>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1200}
        animationOutDuration={1200}
        isVisible={true}
      >
        <Container>
          <Row className="overall-page_height">
            <Col>
              <div className="split-main-div">
                <img src={AboutImage} className="about-image" />
              </div>
            </Col>
            <Col>
              <div className="about-div-headline">
                <h2 className="about-headline">henlo hooman</h2>
              </div>
              <div className="about-content">
                <h4>Our Story</h4>
                <p>
                  The hooman who created this shop is a true doggo lover. We
                  (doggos) understand how much hoomans with or without their own
                  doggos would want to pet me and all my friends. So our founder
                  started talking to more hoomans and discovered that they all
                  experienced sadness when they can't find a doggo to pet. They
                  shared their stories with us about how they would even cry
                  sometimes thinking about it!
                </p>
                <p>
                  Then, this page was born! 
                  We have a 100% Satisfaction Guranteed policy. Every single doggo that is available for pets and cuddles is good doggo. 
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Animated>
    </>
  );
};

export default About;
