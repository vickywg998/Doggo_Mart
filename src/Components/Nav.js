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
      <img
        src={require("../assets/doggopic.jpg")}
        className="logo"
        alt="doggo"
      />
      <ul className="nav-links">
        <Link style={navStyle} to="/Doggo_Mart">
          <li>
            <span>Homepage &nbsp;</span> <Icon name="home" size="small" />
          </li>
        </Link>
        <Link style={navStyle} to="/favorite">
          <li>
            <span> Favorite &nbsp;</span>

            <Icon name="heart" size="small" />
          </li>
        </Link>
        <Link style={navStyle} to="/cart">
          <li>
            <span> Shopping Cart &nbsp;</span>
            <Icon name="add to cart" size="small" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
