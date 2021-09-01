import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`

function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
          <Switch>
            <Route exact path="/">
              <Record />
            </Route>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="*">
              <h2>路径有误，请检查后重试！</h2>
            </Route>
          </Switch>
          </Main>
          <Nav />
        </Wrapper>
      </Router>
  );
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Record() {
  return <h2>记账页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}
export default App;
