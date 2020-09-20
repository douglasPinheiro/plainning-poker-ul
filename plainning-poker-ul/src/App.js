import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateRoom from "./pages/create-room/CreateRoom";
import AdminRoom from "./pages/admin/AdminRoom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={CreateRoom} />
        <Route path="/room/:id" component={AdminRoom} />
      </Switch>
    </div>
  );
}

export default App;
