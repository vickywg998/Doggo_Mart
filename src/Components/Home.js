import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Banner from "./Banner";
import Filter from "./Filter";
import Basket from "./Basket";
// import HomepageOverview from "./Hooks/HomepageOverview";
// import React, { useState, useEffect } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], cartItems: [] };
  }

  componentWillMount() {
    //fetching products from localhost
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data, filteredProducts: data });
      });
      //shopping cart item 
      if(localStorage.getItem('cartItems')){
        this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))})
      }
  }


  handleAddToCart = (e, product) => {
    this.setState((state) => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach((item) => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  };

  handleRemoveFromCart =(e, item)=> {
this.setState(state => {
  const cartItems = state.cartItems.filter(elm => elm.id != item.id);
  localStorage.setItem('cartItems', cartItems);
  return { cartItems: cartItems };
})
  };


  listProducts = () => {
    this.setState((state) => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      // if (state.size !== "") {
      //   return {
      //     filteredProducts: state.products.filter(
      //       a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
      //     )
      //   };
      // }
      return { filteredProducts: state.products };
    });
  };

  handleChangeSort = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };

  // handleChangeSize = (e) => {
  //   this.setState({ size: e.target.value });
  //   this.listProducts();
  // };

  render() {
    return (
      <div>
        <Banner />
        <Container>
          <h1 className="homepage-title">Discover better-for-you Doggos</h1>

          <Row>
            <Col md={9}>
              <Filter
                // size={this.state.size}
                sort={this.state.sort}
                // handleChangeSize={this.handleChangeSize}
                handleChangeSort={this.handleChangeSort}
                count={this.state.filteredProducts.length}
              />

              <hr />

              {/* <HomepageOverview state={state} setState={setState}/> */}
              <Products
                products={this.state.filteredProducts}
                handleAddToCart={this.handleAddToCart}
              />
            </Col>

            <Col>
              <Basket
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
