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
  const [count, setCount] = useState([]);

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

  // const handleAddToCart = (e, product) => {
  //   let productAlreadyInCart = false;
  //   const newCartItems = cartItems.forEach((item) => {
  //     if (item.id === product.id) {
  //       productAlreadyInCart = true;
  //       item.count++;
  //     }
  //     console.log('added')
  //   });
  // setCartItems(newCartItems);
  //   if (!productAlreadyInCart) {
  //     const newCartItems = cartItems.push({ ...product, count: 1 });
  //   }
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //   setCartItems(newCartItems);
  //   return cartItems;
  // };

// const handleRemoveFromCart =(e, item)=> {

//   const removedCartItems = cartItems.filter(elm => elm.id != item.id);
//   setCartItems(removedCartItems)
//   localStorage.setItem('cartItems', removedCartItems);
//   return removedCartItems;

//   };


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
              // handleAddToCart={handleAddToCart}
            />
          </Col>

          <Col>
            <Basket
                cartItems={cartItems}
                // handleRemoveFromCart={handleRemoveFromCart}
              />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;


