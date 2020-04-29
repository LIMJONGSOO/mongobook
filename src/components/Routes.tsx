import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Main from "./Main/Main";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
)