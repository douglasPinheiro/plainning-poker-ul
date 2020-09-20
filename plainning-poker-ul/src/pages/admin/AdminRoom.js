import React, { useEffect, useState } from "react";
import "./AdminRoom.css";
import Button from "react-bootstrap/Button";
import Card from "../../components/card/Card";
import Members from "../../components/members/Members";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getRoom } from "../../services/api";

const AdminRoom = ({ match }) => {
  const roomId = match.params.id;
  const [room, setRoom] = useState({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    getRoom(roomId).then((r) => setRoom(r.data));
  }, []);

  const getLink = () => {
    return `http://localhost:3000/join/${room?.code}`;
  };

  const changeCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className="admin-room-container">
      <div className="my-container">
        <div className="row">
          <div className="col-md-5 column-left">
            <div className="row">
              <div className="col-md-3">
                <div className="icon-room">
                  <img id="img-door" src="/assets/door.jpg"></img>
                </div>
              </div>
              <div className="col-md-9">
                <div className="label-room">
                  <label>{room?.roomName}</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="icon-history">
                  <img id="img-door" src="/assets/book.jpg"></img>
                </div>
              </div>
              <div className="col-md-9">
                <div className="label-history">
                  <textarea
                    rows="6"
                    cols="50"
                    placeholder="Adicione aqui a sua história"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="icon-profiles">
                  <img id="img-door" src="/assets/members.jpg"></img>
                </div>
              </div>
              <div className="col-md-9">
                <div className="label-profiles">
                  <div className="label-profiles-container">
                    <Members username="Fernanda Taketa"></Members>
                    <Members username="Rodorfo Mahs"></Members>
                    <Members username="Ernany Augusto"></Members>
                    <Members username="Douglas da Costa"></Members>
                    <Members username="Joao"></Members>
                  </div>
                  <div className="button-share">
                    <CopyToClipboard
                      text={getLink()}
                      onCopy={() => changeCopied()}
                    >
                      <Button className={copied ? "copied" : ""}>
                        {copied ? "Copiado" : "Compartilhar"}
                      </Button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 column-right">
            <div className="white-board">
              <div className="row">
                <div className="col-md-3">
                  <Card />
                </div>
                <div className="col-md-3">
                  <Card number="1" />
                </div>
                <div className="col-md-3">
                  <Card number="2" />
                </div>
                <div className="col-md-3">
                  <Card number="3" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <Card number="5" />
                </div>
                <div className="col-md-3">
                  <Card number="8" />
                </div>
                <div className="col-md-3">
                  <Card number="13" />
                </div>
                <div className="col-md-3">
                  <Card />
                </div>
              </div>
              <div className="reset-button">
                <Button> Reiniciar </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoom;
