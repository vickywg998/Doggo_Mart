import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

// import Searchbar from "./Searchbar";

function Nav() {

    const navStyle = {
        color: '#414b5a'
    };

  return (
    <nav>
      <img src={require('../assets/doggopic.jpg')} className="logo" alt="doggo"/>
      <ul className="nav-links">
        <Link style={navStyle} to ='/'>
          <li>Homepage</li>
        </Link>
        <Link style={navStyle} to ='/favorite'>
          <li>Favorite &nbsp;<Icon name='heart' size="small"/></li>
        </Link>
        <Link style={navStyle} to ='/cart'>
          <li>Shopping Cart &nbsp;<Icon name='add to cart' size="small"/></li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
