import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "./Banner";
import Filter from "./Filter";
import Basket from "./Basket";
import Cart from "./Cart";

import { useCartItems } from "./Hooks/useCartItems";
import { useUpdateCartItems } from "./Hooks/useUpdateCartItems";

import { useFavItems } from "./Hooks/useFavItems";
import { useUpdateFavItems } from "./Hooks/useUpdateFavItems";

function Home() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(useCartItems()); //setting the cartitems from the useCartITems hook (localstorage)
  const [sortValue, setSortValue] = useState("ascending");
  const [favItems, setFavItems] = useState(useFavItems());

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/products");
      const unsortedProducts = await res.json();
      const sorted = sortProducts(unsortedProducts, sortValue);
      setProducts(sorted);
    };
    fetchData();
  }, []);

  const myCartUpdatingFunction = useUpdateCartItems();
  const myFavUpdatingFunction = useUpdateFavItems();

  const sortProducts = (list, sortValueToUse) => {
    let sorted = list;
    if (sortValueToUse === "ascending") {
      sorted = list.sort((a, b) => a.price - b.price);
    }
    if (sortValueToUse === "descending") {
      sorted = list.sort((a, b) => b.price - a.price);
    }
    return sorted;
  };

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
    const sorted = sortProducts(products, newSortValue);
    setProducts(sorted);
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
      productInFav.count += 1;
    } else {
      const newFavItem = favItem;
      newFavItem.count = 1;
      newFavItems = favItems.concat(newFavItem);
    }
    updateFavItemsWithHook(newFavItems);
  };

  return (
    <div>
      <Banner />
      <Container>
        <h1 className="homepage-title">Meet the World's Cutest Doggos</h1>

        <Row>
          <Col md={9}>
            <Filter
              sortValue={sortValue}
              handleChangeSort={handleChangeSort}
              count={products.length}
            />

            <hr />

            <Products
              products={products}
              favItems={favItems}
              setProducts={setProducts}
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
