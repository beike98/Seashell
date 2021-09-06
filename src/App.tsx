import React from 'react';
import {HashRouter, Switch, Route, Redirect,} from "react-router-dom";
import Edit from './views/Edit';
import Tags from './views/Tags';
import Tag from 'views/Tag';
import Statistics from "./views/Statistics";

const App = () => {
  return (
      <HashRouter>
        <Switch>
          <Redirect exact from="/" to="/edit" />
          <Route exact path="/edit">
            <Edit/>
          </Route>
          <Route exact path="/tags/:id">
            <Tag/>
          </Route>
          <Route exact path="/tags">
            <Tags/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <h2>路径有误！</h2>
          </Route>
        </Switch>
      </HashRouter>
  );
}

export default App;
