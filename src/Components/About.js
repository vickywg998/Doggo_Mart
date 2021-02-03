import React from "react";
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
        <div className="about-container">
          <div className="about-left">
            <img
              src={AboutImage}
              className="about-image"
              alt="about_corgi_image"
            />
          </div>

          <div className="about-right">
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
                Then, this page was born! We have a 100% Satisfaction Guranteed
                policy. Every single doggo that is available for pets and
                cuddles is good doggo.
              </p>
            </div>
          </div>
        </div>
      </Animated>
    </>
  );
};

export default About;
