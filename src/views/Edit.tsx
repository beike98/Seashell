import Layout from "../components/Layout";
import React, {useState} from "react";
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
  const [selected, setSelected] = useState({
    tag: '',
    note: '',
    category: '-' as ('-' | '+'),
    amount: '0'
  })
  return (
      <MyLayout>
        <TagsSection value={selected.tag}
                     onChange={(tag) => setSelected({
                       ...selected, tag: tag
                     })}/>
        <NoteSection value={selected.note}
                     onChange={(note) => setSelected({
                       ...selected, note: note
                     })}/>
        <CategorySection value={selected.category}
                         onChange={(category) => setSelected({
                           ...selected, category: category
                         })}/>
        <NumberPadSection value={selected.amount}
                          onChange={(amount) => setSelected({
                            ...selected, amount: amount
                          })}/>
      </MyLayout>
  )
}

export default Edit