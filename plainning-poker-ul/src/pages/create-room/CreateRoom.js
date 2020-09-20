import React, { useState } from "react";
import "./CreateRoom.css";
import Button from "react-bootstrap/Button";
import { createRoom } from "../../services/api";

function CreateRoom() {
  const [roomName, setRoomName] = useState("");

  const submitRoom = () => {
    createRoom(roomName, "admin");
  };

  return (
    <div className="CreateRoom">
      <div className="CreateRoom-row">
        <div className="CreateRoom-column-left">
          <div className="CreateRoom-wrapper">
            <div className="CreateRoom-middle">
              Logo
              <div className="CreateRoom-inside">
                Criar da sala
                <input
                  placeholder="Nome"
                  onKeyDown={(e) => setRoomName(e.target.value)}
                />
              </div>
              <Button onClick={submitRoom}>Criar</Button>
            </div>
          </div>
        </div>
        <div className="CreateRoom-column-right">
          <img src="assets/board.png" alt="board"></img>
        </div>
      </div>
    </div>
  );
}

export default CreateRoom;
