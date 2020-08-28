import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

// import Searchbar from "./Searchbar";

function Nav() {
  const navStyle = {
    color: "#414b5a",
  };

  return (
    <nav>
      <Link style={navStyle} to="/Doggo_Mart">
        <img
          src={require("../assets/doggopic.jpg")}
          className="logo"
          alt="doggo"
        />
      </Link>

      <ul className="nav-links">
        {/* <Link style={navStyle} to="/Doggo_Mart">
          <li>
            <span>Homepage &nbsp;</span> <Icon name="home" size="small" />
          </li>
        </Link> */}
        <Link style={navStyle} to="/favorite">
          <li>
            <Icon name="heart" size="small" />
            <span> Favorite &nbsp;</span>
          </li>
        </Link>
        <Link style={navStyle} to="/cart">
          <li>
            <Icon name="add to cart" size="small" />
            <span> Shopping Cart &nbsp;</span>
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
      </ul>
    </nav>
  );
}

export default Nav;
