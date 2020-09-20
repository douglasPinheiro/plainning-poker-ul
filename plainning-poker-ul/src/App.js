import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateRoom from "./pages/create-room/CreateRoom";
import AdminRoom from "./pages/admin/AdminRoom";
import JoinRoom from "./pages/join-room/JoinRoom";
import MemberRoom from "./pages/member/Member";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={CreateRoom} />
        <Route path="/join/:id" component={JoinRoom} />
        <Route path="/member/:roomId/:userId" component={MemberRoom} />
        <Route path="/room/:id" component={AdminRoom} />
      </Switch>
    </div>
  );
}

export default App;
