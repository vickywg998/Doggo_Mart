import React, { useState, useEffect } from "react";
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

function Home(props) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [sortValue, setSortValue] = useState("ascending");
  const [count, setCount] = useState(0);

  function usePersistedState(key, defaultValue) {
    const [state, setState] = React.useState(
      JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }

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
    let productAlreadyInCart = false;
  
    cartItems.forEach(item => {
      if (product.id === item.id ) {
        item.count += 1;
        console.log(item.count)
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      const newCartItem = product;
      newCartItem.count = 1;
      console.log(cartItems)
    setCartItems(cartItems.concat(newCartItem));
     
    }
  };

  const handleRemoveFromCart = (product) => {
    const removedCartItems = cartItems.filter(a => a.id !== product.id);
    setCartItems(removedCartItems);
    console.log(removedCartItems, "removed item")
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
              // count={count}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
