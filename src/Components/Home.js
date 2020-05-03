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
      const sorted = sortProducts(unsortedProducts, sortValue);
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
        }
      } catch (error) {}
    }
  }, []);

  useEffect(() => {
    localStorage.cartItems = JSON.stringify(cartItems);
  }, [cartItems]);

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

  const handleChangeSort = (e) => {
    const newSortValue = e.target.value;
    setSortValue(newSortValue);
    const sorted = sortProducts(products, newSortValue);
    setProducts(sorted);
  };

  const HandleAddToCart = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    let newCartItems = [...cartItems];
    if (productInCart) {
      productInCart.count += 1;
    } else {
      const newCartItem = product;
      newCartItem.count = 1;
      newCartItems = cartItems.concat(newCartItem);
    }
    setCartItems(newCartItems);
  };

  const handleRemoveFromCart = (product) => {
    const removedCartItems = cartItems.filter((a) => a.id !== product.id);
    setCartItems(removedCartItems);
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
