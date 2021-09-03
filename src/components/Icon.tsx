import React from "react";
import styled from "styled-components";
// //为防止TreeShaking，使用require导入
require("../icons/tag.svg");
require("../icons/edit.svg");
require("../icons/statistics.svg")

type Props = {
  name: string
}

const IconWrapper = styled.div`
  .icon {
    width: 24px;
    height: 24px;
  }
`

const Icon = (props: Props) => {
  return (
      <IconWrapper>
        <svg className="icon">
          <use xlinkHref={'#' + props.name}/>
        </svg>
      </IconWrapper>
  )
};

export default Icon