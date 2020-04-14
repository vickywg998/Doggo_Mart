  
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer'
import Routes from './Routes';


function App() {
  return (

      <BrowserRouter>
        <Nav />
        <Routes />
        <Footer />
      </BrowserRouter>
  );
}

export default App;