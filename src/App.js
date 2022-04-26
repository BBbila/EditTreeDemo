import React from "react";
import { CONTEXT } from "./config";
import EchartsBox from "./pages/echarts/index";
import Events from "./pages/events/index";

import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${CONTEXT}/`}
          render={() => <Redirect to={`${CONTEXT}/echarts`}></Redirect>}
        ></Route>
        <Route exact path={`${CONTEXT}/echarts`} component={EchartsBox} />
        <Route exact path={`${CONTEXT}/events`} component={Events} />
      </Switch>
    </Router>
  );
}

export default App;
