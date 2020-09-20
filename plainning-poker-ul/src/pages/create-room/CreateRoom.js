import React, { useState } from "react";
import "./CreateRoom.css";
import Button from "react-bootstrap/Button";
import { createRoom } from "../../services/api";
import { useHistory } from "react-router-dom";

const CreateRoom = () => {
  const history = useHistory();
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");

  const submitRoom = () => {
    createRoom(roomName, userName).then((r) =>
      history.push(`/room/${r.data.code}`)
    );
  };

  return (
    <div className="CreateRoom">
      <div className="CreateRoom-row">
        <div className="CreateRoom-column-left">
          <div className="CreateRoom-wrapper">
            <div className="CreateRoom-middle">
              Logo
              <div className="CreateRoom-inside">
                Criar sala
                <input
                  placeholder="Nome da sala"
                  onKeyDown={(e) => setRoomName(e.target.value)}
                />
                <input
                  placeholder="Nome do usuário"
                  onKeyDown={(e) => setUserName(e.target.value)}
                />
              </div>
              <Button onClick={submitRoom}>Criar</Button>
              <div className="CreateRoom-tablet-button"></div>
            </div>
          </div>
        </div>
        <div className="CreateRoom-column-right">
          <img src="assets/board.png" alt="board"></img>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
