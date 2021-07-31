import React from "react";
import "./Card.styles.css";

const Card = ({ children, classnames }) => {
  return <div className={`card ${classnames}`}>{children}</div>;
};

export default Card;
