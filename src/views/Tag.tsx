import React from 'react';
import useTags from '../useTags';
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import Layout from "../components/Layout";
import Icon from "../components/Icon";

type Params = {
  id: string
}
const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 48px;
  background: white;
  padding: 0 16px;
  margin-top: 8px;

  > label {
    display: flex;
    align-items: center;
    width: 100%;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      width: 78vw;
      font-size: 14px;
      background: none;
      border: none;
    }
  }
`
const ButtonWrapper = styled.div`
  margin-top: 48px;
  text-align: center;
`
const Tag: React.FC = () => {
  const {findTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
      <Layout>
        <TopBar>
          <Icon name="left"/>
          <span>编辑标签</span>
          <span style={{width: '24px'}}/>
        </TopBar>
        <InputWrapper>
          <label>
            <span>标签名</span>
            <input type="text" value={tag.name}/>
          </label>
        </InputWrapper>
        <ButtonWrapper>
          <button className="button">删除标签</button>
        </ButtonWrapper>
      </Layout>
  );
};

export default Tag;