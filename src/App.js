import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { hot } from "react-hot-loader";

import Home from "./components/Home/Home";

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/" from="/" />
      </Switch>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default hot(module)(App);
