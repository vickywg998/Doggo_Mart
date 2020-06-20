import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import Filter from "./Filter";
import Basket from "./Basket";
import Cart from "./Cart";
import Searchbar from "./Searchbar";

import { useCartItems } from "./Hooks/useCartItems";
import { useUpdateCartItems } from "./Hooks/useUpdateCartItems";

import { useFavItems } from "./Hooks/useFavItems";
import { useUpdateFavItems } from "./Hooks/useUpdateFavItems";
import fp from 'lodash/fp';

function Home() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(useCartItems());
  const [sortValue, setSortValue] = useState("ascending");
  const [filterValue, setFilterValue] = useState("");
  const [favItems, setFavItems] = useState(useFavItems());
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/products");
      const allProducts = await res.json();
      setProducts(allProducts);
    };
    fetchData();
  }, []);

  const myCartUpdatingFunction = useUpdateCartItems();
  const myFavUpdatingFunction = useUpdateFavItems();

  const updateCartItemsWithHook = (newCartItems) => {
    setCartItems(newCartItems);
    myCartUpdatingFunction(newCartItems);
  };

  const updateFavItemsWithHook = (newFavItems) => {
    setFavItems(newFavItems);
    myFavUpdatingFunction(newFavItems);
  };
  //newCartItems can be any name, replacing updateCartItemsWithHook(newCartItems); & updateCartItemsWithHook(removedCartItems);

  const handleChangeSort = (e) => {
    const newSortValue = e.target.value;
    setSortValue(newSortValue);
  };

  const handleChangeSize = (e) => {
    const newFilterValue = e.target.value;
    setFilterValue(newFilterValue);
  };

  const handleChangeSearch = (e) => {
    const newSearchValue = e.target.value;
    setSearch(newSearchValue);
    // console.log("newSearchValue", newSearchValue);
  };


  const handleAddToCart = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    let newCartItems = [...cartItems];
    if (productInCart) {
      productInCart.count += 1;
    } else {
      const newCartItem = product;
      newCartItem.count = 1;
      newCartItems = cartItems.concat(newCartItem);
    }
    updateCartItemsWithHook(newCartItems);
  };

  const handleRemoveFromCart = (product) => {
    const removedCartItems = cartItems.filter((a) => a.id !== product.id);
    updateCartItemsWithHook(removedCartItems);
  };

  const handleAddToFav = (favItem) => {
    const productInFav = favItems.find((item) => item.id === favItem.id);

    let newFavItems = [...favItems];
    if (productInFav) {
      productInFav.favorited = "no";
      newFavItems = favItems.filter((a) => a.id !== favItem.id);
    } else {
      const newFavItem = favItem;
      newFavItem.favorited = "yes";
      newFavItems = favItems.concat(newFavItem);
    }
    updateFavItemsWithHook(newFavItems);
  };

  const composed = fp.compose(
    fp.orderBy("price", sortValue === "ascending" ? "asc" : "desc"),
    fp.filter(item => filterValue ? (item.availableSizes.indexOf(filterValue.toUpperCase()) >= 0) : true),
    fp.filter(item =>  search ? (item.title.toLowerCase().includes(search.toLowerCase())) : true)
  );

  const results = composed(products);

  return (
    <div>
      <Banner />
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 9 }}>
            <Searchbar handleChangeSearch={handleChangeSearch} search={search}/>
          </Col>
        </Row>
        <h1 className="homepage-title">Meet the World's Cutest Doggos</h1>

        <Row>
          <Col md={9}>
            <Filter
              sortValue={sortValue}
              handleChangeSort={handleChangeSort}
              filterValue={filterValue}
              handleChangeSize={handleChangeSize}
              count={results.length}
            />

            <hr />

            <Products
              products={results}
              favItems={favItems}
              setFavItems={setFavItems}
              handleAddToCart={handleAddToCart}
              handleAddToFav={handleAddToFav}
            />
          </Col>

          <Col>
            <Basket
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Col>
        </Row>
      </Container>
      <Route
        path="/cart"
        render={() => (
          <Cart
            cartItems={cartItems}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        )}
      />
    </div>
  );
}

export default Home;