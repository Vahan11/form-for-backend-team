import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../pages/home/Home";
import Registration from "../../pages/registration/Registration";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" children={<Home />} />
      <Route path="/signup" children={<Registration />} />
    </Switch>
  );
};

export default Routes;
