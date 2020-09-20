import React, { useState } from "react";
import "./JoinRoom.css";
import Button from "react-bootstrap/Button";
import { joinRoom } from "../../services/api";
import { useHistory } from "react-router-dom";

const JoinRoom = ({ match }) => {
  const roomId = match.params.id;
  const history = useHistory();
  const [username, setUsername] = useState("");

  const submitRoom = () => {
    joinRoom(roomId, username).then((r) => {
      const user = r.data.participants.find((d) => d.name === username);
      console.log(user);
      history.push(`/member/${r.data._id}/${user._id}`);
    });
  };

  return (
    <div className="JoinRoom">
      <div className="JoinRoom-row">
        <div className="JoinRoom-column-left">
          <div className="JoinRoom-wrapper">
            <div className="JoinRoom-middle">
              <img id="img-door" src="/assets/door.jpg"></img>
              <div className="JoinRoom-inside">
                Entrar na sala
                <input
                  placeholder="Nome do usuário"
                  onKeyDown={(e) => setUsername(e.target.value)}
                />
              </div>
              <Button onClick={submitRoom}>Entrar</Button>
              <div className="JoinRoom-tablet-button"></div>
            </div>
          </div>
        </div>
        <div className="JoinRoom-column-right">
          <img src="/assets/board.png" alt="board"></img>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
