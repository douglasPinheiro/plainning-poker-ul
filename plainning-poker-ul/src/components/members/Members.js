import React from "react";

const Members = ({ username }) => {
  return (
    <div className="poker-card">
      <div className="card-number">{username}</div>
      <div className="card-square">
        <img
          src="../assets/logo.jpeg"
          alt="card"
          className="card-logo"
          id="logo-small"
        ></img>
      </div>
      <div className="card-number card-number-bottom">{username}</div>
    </div>
  );
};

export default Members;
