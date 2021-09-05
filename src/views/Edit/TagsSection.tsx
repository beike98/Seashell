import styled from "styled-components";
import React from "react";
import useTags from "../../useTags";

const MyTagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      &.selected {
        background: #57d5fa;
      }

      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`

type Props = {
  value: number,
  onChange: (tag: number) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags} = useTags();
  const selectedTagId = props.value
  const onSelect = (tagId:number) => {
    if (tagId === selectedTagId) {
      props.onChange(0)
    } else {
      props.onChange(tagId)
    }
  }
  const getClassName = (tagId: number) => {
    if (tagId === selectedTagId) {
      return 'selected'
    } else {
      return ''
    }
  }
  return (
      <MyTagsSection>
        <ol>
          {tags.map(tag =>
              <li key={tag.id}
                  onClick={() => {
                    onSelect(tag.id)
                  }}
                  className={getClassName(tag.id)}>
                {tag.name}</li>
          )}
        </ol>
      </MyTagsSection>
  )
}

export default TagsSection