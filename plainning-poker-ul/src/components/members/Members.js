import React from "react";
import "./Members.css";

const Members = ({ username }) => {
  return (
    <div className="row-profile">
      <div className="user-container">
        <div className="members-username">{username}RN</div>
      </div>
    </div>
  );
};

export default Members;
