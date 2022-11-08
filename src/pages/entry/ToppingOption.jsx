import React from "react";
import { Col } from "react-bootstrap";

const ToppingOption = ({ imagePath, name }) => {
  return (
    <Col lg={3} style={{ textAlign: "center" }} md={4} sm={6} xs={12}>
      <img
        alt={`${name} topping`}
        src={`hptt://localhost:3030/${imagePath}`}
        style={{ width: "75%" }}
      />
    </Col>
  );
};

export default ToppingOption;
