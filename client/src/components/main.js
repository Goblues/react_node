import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Teacher from "./teacher";
import Kakaomap from "./kakaomap";
import Login from "./login";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/teacher" component={Teacher} />
      <Route path="/kakaomap" component={Kakaomap} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Main;
