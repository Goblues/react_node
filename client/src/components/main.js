import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Teacher from "./teacher";
import Login from "./login";
import Signup from "./signup";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/teacher" component={Teacher} />>
      <Route path="/kakaomap" />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

export default Main;
