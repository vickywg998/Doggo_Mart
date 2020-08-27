import React from "react";
import { Row, Col } from "react-bootstrap";

const Filter = (props) => {
  return (
    <Row className="homepage-result">
      <Col md={4}>
        <div>
          {" "}
          <label>Order by : </label>
        </div>
        <select value={props.sortValue} onChange={props.handleChangeSort}>
          <option value="ascending">Lowest to Highest</option>
          <option value="descending">Highest to Lowest</option>
        </select>
      </Col>
      <Col md={4}>
        <div>
          <label>Filter by Size: </label>
        </div>
        <select value={props.filterValue} onChange={props.handleChangeSize}>
          <option value="">All</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
      </Col>
      <Col md={4}>{props.count} doggos found.</Col>
    </Row>
  );
};

export default Filter;
