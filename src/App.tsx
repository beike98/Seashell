import React from 'react';
import {HashRouter, Switch, Route, Redirect,} from "react-router-dom";
import Edit from './views/Edit';
import Layout from "./components/Layout";
import Tags from './views/Tags';

const App = () => {
  return (
      <HashRouter>
        <Switch>
          <Redirect exact from="/" to="/edit" />
          <Route exact path="/edit">
            <Edit/>
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

const Statistics = () => {
  return (
      <Layout><h2>统计页面</h2></Layout>
  );
}

export default App;
