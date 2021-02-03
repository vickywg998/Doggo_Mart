import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart/Cart";
import Favorite from "./Components/Home/Favorite";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";
import Confirmation from "./Components/Cart/Confirmation";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { AuthProvider } from "./Components/Context/AuthContext";

function App() {
  return (
    <Router>
      <Nav />

      <AuthProvider>
        <Switch>
          <Route path="/Doggo_Mart" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/confirmation" component={Confirmation} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;
