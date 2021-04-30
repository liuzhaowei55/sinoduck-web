import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./pages/Index";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  );
}
