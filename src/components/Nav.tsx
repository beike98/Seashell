import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      padding-top: 4px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

const Nav = () => {
  return (
      <NavWrapper>
        <ul>
          <li>
            <Icon name="tag"/>
            <Link to="/tags">标签</Link>
          </li>
          <li>
            <Icon name="edit"/>
            <Link to="/">记一笔</Link>
          </li>
          <li>
            <Icon name="statistics"/>
            <Link to="/statistics">统计</Link>
          </li>
        </ul>
      </NavWrapper>
  )
}

export default Nav;