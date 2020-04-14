import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Cart from "./Components/Cart";
import Favorite from "./Components/Favorite";
import Home from "./Components/Home";

function Routes() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorite" component={Favorite} />
        </Switch>
      </div>
    </>
  );
}

export default Routes;