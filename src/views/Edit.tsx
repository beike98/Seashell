import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import TagsSection from "./Edit/TagsSection";
import NoteSection from "./Edit/NoteSection";
import CategorySection from "./Edit/CategorySection";
import NumberPadSection from "./Edit/NumberPadSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Edit = () => {
  return (
      <MyLayout>
        <TagsSection/>
        <NoteSection/>
        <CategorySection/>
        <NumberPadSection/>
      </MyLayout>
  );
}

export default Edit