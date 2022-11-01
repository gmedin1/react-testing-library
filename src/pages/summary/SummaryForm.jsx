import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

function SummaryForm({ setOrderPhase }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPhase("completed");
  };

  const popover = (
    <Popover>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger overlay={popover} placement="right">
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          checked={isChecked}
          label={checkboxLabel}
          onChange={(e) => setIsChecked(e.target.checked)}
          type="checkbox"
        />
      </Form.Group>
      <Button disabled={!isChecked} type="submit" variant="primary">
        Confirm Order
      </Button>
    </Form>
  );
}

export default SummaryForm;
