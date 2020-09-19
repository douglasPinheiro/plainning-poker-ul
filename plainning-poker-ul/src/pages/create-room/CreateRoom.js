import React from "react";
import "./CreateRoom.css";
import Button from "react-bootstrap/Button";

function CreateRoom() {
  return (
    <div className="CreateRoom">
      <div className="CreateRoom-row">
        <div className="CreateRoom-column">
          <div className="CreateRoom-wrapper">
            <div className="CreateRoom-middle">
              Criar sala
              <div className="CreateRoom-inside">
                Nome da sala
                <input />
              </div>
              <Button>Criar</Button>
            </div>
          </div>
        </div>
        <div className="CreateRoom-column"></div>
      </div>
    </div>
  );
}

export default CreateRoom;
