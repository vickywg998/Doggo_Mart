import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Filter = (props) => {
  return (
    <Row className="homepage-result">
      {/* <Col md={4}>
            <label>Filter by Size: </label>
             <select value ={this.props.size} onChange={this.props.handleChangeSize}>
             <option value="">Select</option>
             <option value="x">XS</option>
             <option value="s">S</option>
             <option value="m">M</option>
             <option value="l">L</option>
             <option value="xl">XL</option>
             <option value="xxl">XXL</option>
             </select>
             </Col> */}
      <Col md={4}>
        <label>Order by : </label>
        <select value={props.sort} onChange={props.handleChangeSort}>
          <option value="">Select</option>
          <option value="lowest">Lowest to Highest</option>
          <option value="highest">Highest to Lowest</option>
        </select>
      </Col>
      <Col md={4}>{props.count} doggos found.</Col>
    </Row>
  );
};

export default Filter;
