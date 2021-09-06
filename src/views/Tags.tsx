import React from "react";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import styled from "styled-components";
import useTags from "../hooks/useTags";
import {Link} from "react-router-dom";

const MyTags = styled.div`
  text-align: center;

  > ol {
    background: white;
    margin-bottom: 48px;

    > li {
      margin: 0 10px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);

      > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
      }

      > span {
        max-width: 90%;
      }
    }
  }
`

const Tags = () => {
  const {tags,addTag} = useTags();
  return (
      <Layout>
        <MyTags>
          <ol>
            {tags.map(tag =>
                <li key={tag.id}>
                  <Link to={'/tags/'+tag.id}>
                    <span className="oneLine">{tag.id}.&nbsp;{tag.name}</span>
                    <Icon name="right"/>
                  </Link>
                </li>
            )}
          </ol>
          <button className="button" onClick={addTag}>新建标签</button>
        </MyTags>
      </Layout>
  );
}

export default Tags