import React from "react";
import { CONTEXT } from "./config";
import EchartsBox from "./pages/echarts/index";

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
      </Switch>
    </Router>
  );
}

export default App;
