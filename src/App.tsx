import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Edit from './views/Edit';
import Layout from "./components/Layout";

const App = () => {
  return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/edit" />
          <Route path="/edit">
            <Edit/>
          </Route>
          <Route path="/tags">
            <Tags/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <h2>路径有误！</h2>
          </Route>
        </Switch>
      </Router>
  );
}

const Tags = () => {
  return (
      <Layout><h2>标签页面</h2></Layout>
  );
}

const Statistics = () => {
  return (
      <Layout><h2>统计页面</h2></Layout>
  );
}

export default App;
