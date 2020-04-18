import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Filter = (props) => {
  return (
    <Row className="homepage-result">
      <Col md={4}>
        <label>Order by : </label>
        <select value={props.sortValue} onChange={props.handleChangeSort}>
          <option value="ascending">Lowest to Highest</option>
          <option value="descending">Highest to Lowest</option>
        </select>
      </Col>
      <Col md={4}>{props.count} doggos found.</Col>
    </Row>
  );
};

export default Filter;
