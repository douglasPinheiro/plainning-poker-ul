import React from "react";
import "./Card.css";

const CardBack = () => {
  return (
    <div className="poker-card">
      <img
        src="/assets/logo.jpeg"
        alt="card"
        className="card-logo"
        id="logo-big"
      ></img>
    </div>
  );
};

const Card = ({ number }) => {
  console.log(number);
  if (number === undefined) return <CardBack />;

  return (
    <div className="poker-card">
      <div className="card-number">{number}</div>
      <div className="card-square">
        <img
          src="/assets/logo.jpeg"
          alt="card"
          className="card-logo"
          id="logo-small"
        ></img>
      </div>
      <div className="card-number card-number-bottom">{number}</div>
    </div>
  );
};

export default Card;
