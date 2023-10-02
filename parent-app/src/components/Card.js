import React from "react";

const Card = ({ children }) => (
  <div style={{ padding: 16, border: "1px solid red" }}>
    <h5>Card from parent-app</h5>
    {children}
  </div>
);

export default Card;
