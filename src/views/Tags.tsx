import React, {useState} from "react";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import styled from "styled-components";

const MyTags = styled.div`
  text-align: center;

  > ol {
    background: white;
    margin-bottom: 48px;

    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      margin: 0 10px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);

      > span {
        max-width: 90%;
      }
    }
  }
`

const Tags = () => {
  const [tags] = useState<string[]>(["吃饭", "购物", "交通", "房租", "工资"])
  return (
      <Layout>
        <MyTags>
          <ol>
            {tags.map(tag =>
                <li key={tag}>
                  <span className="oneLine">{tag}</span>
                  <Icon name="right"/>
                </li>
            )}
          </ol>
          <button className="button">新建标签</button>
        </MyTags>
      </Layout>
  );
}

export default Tags