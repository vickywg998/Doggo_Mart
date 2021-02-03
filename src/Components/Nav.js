import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";

function Nav() {
  const navStyle = {
    color: "#414b5a",
  };

  return (
    <nav>
      <Link style={navStyle} to="/Doggo_Mart/">
        <img
          src={require("../assets/doggopic.jpg")}
          className="logo"
          alt="doggo"
        />
      </Link>

      <ul className="nav-links">
        <Link style={navStyle} to="/cart">
          <li>
            <Icon name="add to cart" size="small" />
            <span> Shopping Cart &nbsp;</span>
          </li>
        </Link>
        <Link style={navStyle} to="/favorite">
          <li>
            <Icon name="heart" size="small" />
            <span> Favorite &nbsp;</span>
          </li>
        </Link>

        <Link style={navStyle} to="/about">
          <li>
            <Icon name="smile outline" size="small" />
            <span> About &nbsp;</span>
          </li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li>
            <Icon name="mail" size="small" />
            <span> Contact &nbsp;</span>
          </li>
        </Link>
        <Link style={navStyle} to="/login">
          <Button animated>
            <Button.Content visible>
              <span> Sign In &nbsp;</span>
              <Icon name="user" size="small" />
            </Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
