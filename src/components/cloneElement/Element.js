import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Element = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <Button variant="dark" onClick={() => setVal(val - 1)}>
        -
      </Button>
      <span>
        <Badge bg="secondary">{val}</Badge>
      </span>
      <Button variant="dark" onClick={() => setVal(val + 1)}>
        +
      </Button>
    </div>
  );
};

export default Element;
