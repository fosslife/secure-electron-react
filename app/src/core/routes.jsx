import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ROUTES from "Constants/routes";
import Welcome from "Pages/welcome/welcome";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.WELCOME} component={Welcome}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
