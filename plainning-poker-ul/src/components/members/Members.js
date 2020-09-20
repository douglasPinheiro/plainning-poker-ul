import React from "react";
import "./Members.css";

const Members = ({ username }) => {
  const formatUsername = (username) => {
    if (!username) return "";

    const nameSplited = username.split(" ");
    let result = "";
    if (nameSplited.length >= 2) {
      result = nameSplited[0][0].concat(nameSplited[1][0]);
    } else {
      result = username.substring(0, 2);
    }
    return result.toUpperCase();
  };

  const getColor = () => {
    const cores = [
      "#3da53c",
      "#b9bb36",
      "#844d14",
      "#c5262e",
      "#8a41c1",
      "#4186c1",
      "#c724a4",
      "#ec472d",
      "#1d1c1b",
      "#ce0c14",
    ];
    const numberUserPosi = Math.round(Math.random() * 9);
    return cores[numberUserPosi];
  };

  return (
    <div className="row-profile">
      <div className="user-container" style={{ backgroundColor: getColor() }}>
        <div className="members-username">{formatUsername(username)}</div>
      </div>
    </div>
  );
};

export default Members;
