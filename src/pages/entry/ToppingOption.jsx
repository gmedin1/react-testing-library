import React from "react";
import { Col, Form } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";

const ToppingOption = ({ imagePath, name }) => {
  const { updateItemCount } = useOrderDetails();
  const handleChange = (e) => {
    updateItemCount(name, e.target.checked ? 1 : 0, "toppings");
  };
  return (
    <Col lg={3} style={{ textAlign: "center" }} md={4} sm={6} xs={12}>
      <img
        alt={`${name} topping`}
        src={`hptt://localhost:3030/${imagePath}`}
        style={{ width: "75%" }}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check type="checkbox" onChange={handleChange} label={name} />
      </Form.Group>
    </Col>
  );
};

export default ToppingOption;
