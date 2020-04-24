import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "./Banner";
import Filter from "./Filter";
import Basket from "./Basket";

function Home() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [sortValue, setSortValue] = useState("ascending");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/products");
      const unsortedProducts = await res.json();
      console.log(unsortedProducts, "unsortedProducts");
      const sorted = sortProducts(unsortedProducts, sortValue);
      // set this up to combat useState not changing immediately (prevstate, result)
      setProducts(sorted);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const storedCartItems = localStorage.cartItems;
    if (storedCartItems) {
      try {
        const parsed = JSON.parse(storedCartItems);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].id) {
          setCartItems(parsed);
          console.log(parsed, "we set the items from localstorage")
        }
      } catch(error) {
        // we don't care
      }
    }
    // localStorage.cartItems
  }, []); // array is the list of things that should trigger the useEffect, if empty, then nothing should trigger it except first time

useEffect(() => {
  localStorage.cartItems = JSON.stringify(cartItems);
  console.log("saved cart items")
  //we are going to save the cart items here
},[cartItems])

  const sortProducts = (list, sortValueToUse) => {
    let sorted = list;
    // console.log(sorted, "unsorted list");
    if (sortValueToUse === "ascending") {
      sorted = list.sort((a, b) => a.price - b.price);
    }
    if (sortValueToUse === "descending") {
      sorted = list.sort((a, b) => b.price - a.price);
    }
    // console.log(sorted, "sorted");
    return sorted;
  };

  // introducing another argument

  const handleChangeSort = (e) => {
    const newSortValue = e.target.value;
    setSortValue(newSortValue);
    const sorted = sortProducts(products, newSortValue);
    setProducts(sorted);
    //setProducts() side effects, any of the ones that use useState setter functions = side effects
    console.log(newSortValue, "target value");
  };

  const HandleAddToCart = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    let newCartItems = [...cartItems]; //new array
    if (productInCart) {
      productInCart.count += 1;
      console.log(productInCart.count, "product In cart count");
    } else {
      const newCartItem = product;
      newCartItem.count = 1;
      console.log(cartItems);
      console.log(newCartItem.count, "new item count");
      newCartItems = cartItems.concat(newCartItem);
    }
    console.log("final assignment", newCartItems);
    setCartItems(newCartItems);
  };

  const handleRemoveFromCart = (product) => {
    const removedCartItems = cartItems.filter((a) => a.id !== product.id);
    setCartItems(removedCartItems);
    console.log(removedCartItems, "removed item");
  };

  return (
    <div>
      <Banner />
      <Container>
        <h1 className="homepage-title">Discover better-for-you Doggos</h1>

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
              setProducts={setProducts}
              HandleAddToCart={HandleAddToCart}
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
    </div>
  );
}

export default Home;

//function supposed to be updating the page isn't running
//console.log shows number of item is correct when added
//however, cart is one step behind if it's same item

// before we were mutating the old reference (e.g. let newCartItems = [cartItems];)
// make an entire new copy of the state, and change that instead
// react: thinks nothing changed cause reference is the same before creating a new copy
//let newCartItems = [...cartItems]
