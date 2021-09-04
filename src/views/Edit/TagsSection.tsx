import styled from "styled-components";
import React, {useState} from "react";

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
        background: #3f90f7;
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

const TagsSection: React.FC = () => {
  const [tags] = useState<string[]>(["吃饭", "购物", "交通", "房租", "工资"])
  const [selectedTag, setSelectedTag] = useState<string>('')
  const onSelect = (tag: string) => {
    if (tag === selectedTag) {
      setSelectedTag('')
    } else {
      setSelectedTag(tag)
    }
  }
  const getClassName = (tag: string) => {
    if (tag === selectedTag) {
      return 'selected'
    } else {
      return ''
    }
  }
  return (
      <MyTagsSection>
        <ol>
          {tags.map(tag =>
              <li key={tag}
                  onClick={() => {
                    onSelect(tag)
                  }}
                  className={getClassName(tag)}>
                {tag}</li>
          )}
        </ol>
      </MyTagsSection>
  )
}

export default TagsSection