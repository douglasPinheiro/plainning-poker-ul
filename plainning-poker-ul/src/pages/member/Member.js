import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./Member.css";
import { getRoom } from "../../services/api";

const Member = ({ match }) => {
  const roomId = match.params.roomId;
  const [room, setRoom] = useState({});

  useEffect(() => {
    getRoom(roomId).then((r) => setRoom(r.data));
  }, []);
  return (
    <div className="admin-member-container">
      <div className="other-container">
        <div className="description-container">
          <div className="row">
            <div className="col-md-2 page-members">
              <div className="icon-room">
                <img id="img-door" src="/assets/door.jpg"></img>
              </div>
            </div>
            <div className="col-md-4 members-page">
              <div className="label-member">
                <label>{room?.roomName}</label>
              </div>
            </div>
            <div className="col-md-2 page-members">
              <div className="history-icon">
                <img id="img-door" src="/assets/book.jpg"></img>
              </div>
            </div>
            <div className="col-md-4 members-page">
              <div className="history-label">Descrição da história</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 board-container">
            <div className="white-board">
              <div className="row">
                <div className="col-md-3 card-content">
                  <Card />
                </div>
                <div className="col-md-3 card-content">
                  <Card number="1" />
                </div>
                <div className="col-md-3 card-content">
                  <Card number="2" />
                </div>
                <div className="col-md-3 card-content">
                  <Card number="3" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 card-content">
                  <Card number="5" />
                </div>
                <div className="col-md-3 card-content">
                  <Card number="8" />
                </div>
                <div className="col-md-3 card-content">
                  <Card number="13" />
                </div>
                <div className="col-md-3 card-content">
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Member;
