import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  @media(min-width:500px){
    width: 500px;
    position: absolute;
    left: 50%;
    margin-left: -250px;
  }
`

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`
const Layout = (props: any) => {
  return (
      <Wrapper>
        <Main className={props.className}>
          {props.children}
        </Main>
        <Nav/>
      </Wrapper>
  );
}
export default Layout;