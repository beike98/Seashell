import styled from "styled-components";
import React from "react";

const MyNotesSection = styled.section`
  background: #f5f5f5;
  font-size: 14px;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  > label {
    display: flex;
    align-items: center;
    width: 100%;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
  }
`
type Props = {
  value:string,
  onChange:(note:string)=>void
}
const NoteSection:React.FC<Props> = (props) => {
  const note = props.value;
  return (
      <MyNotesSection>
        <label>
          <span>备注</span>
          <textarea className="autoText"
                    rows={1}
                    placeholder="请输入备注"
                 value={note}
                 onChange={(e)=>{
                   props.onChange(e.target.value)
                   e.target.style.height = "auto";
                   e.target.style.height = e.target.scrollHeight + "px";
                 }}/>
        </label>
      </MyNotesSection>
  )
}
export default NoteSection