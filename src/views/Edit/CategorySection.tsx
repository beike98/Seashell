import styled from "styled-components";
import React, {useState} from "react";

const MyCategorySection = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #d9d9d9;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`

const CategorySection: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap;
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const [selectedCategory, setSelectedCategory] = useState('-');
  return (
      <MyCategorySection>
        <ul>
          {categoryList.map(c =>
              <li key={c}
                  className={selectedCategory === c ? 'selected' : ''}
                  onClick={() => {
                    setSelectedCategory(c)
                  }}>
                {categoryMap[c]}
              </li>
          )}
        </ul>
      </MyCategorySection>
  )
}

export default CategorySection