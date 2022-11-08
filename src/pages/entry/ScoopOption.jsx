import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";

const ScoopOption = ({ imagePath, name }) => {
  const { updateItemCount } = useOrderDetails();
  const handleChange = (e) => updateItemCount(name, parseInt(e.target.value), "scoops"); // prettier-ignore
  return (
    <Col lg={3} style={{ textAlign: "center" }} md={4} sm={6} xs={12}>
      <img
        alt={`${name} scoop`}
        src={`http://localhost:3030/${imagePath}`}
        style={{ width: "75%" }}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOption;
