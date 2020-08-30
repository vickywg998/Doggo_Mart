  
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Cart from "./Components/Cart";
import Favorite from "./Components/Favorite";
import Home from "./Components/Home";
import Footer from './Components/Footer';
import Confirmation from "./Components/Confirmation";
import About from "./Components/About";

function App() {
  return (

      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/confirmation" component={Confirmation} />
          <Route path="/about" component={About} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
