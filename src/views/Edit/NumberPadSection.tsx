import styled from "styled-components";
import React from "react";

const MyNumberSection = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    border: 3px solid white;
    background: white;

    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: 3px solid white;
      border-radius: 15px;
      background: #efefef;

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }
    }
  }
`
type Props = {
  value:string,
  onChange:(value:string)=>void
}
const NumberPadSection:React.FC<Props> = (props) => {
  const output = props.value;
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          props.onChange(text)
        } else {
          props.onChange(output + text)
        }
        if (output.indexOf('.') !== -1) {
          const maxLength = output.indexOf('.') + 3
          if (output.length >= maxLength) {
            props.onChange(output.substring(0, maxLength));
          }
        } else if (output.length >= 12) {
          props.onChange(output.substring(0, 12));
        }
        break;
      case '.':
        if (output.indexOf('.') === -1) {
          props.onChange(output + '.');
        }
        break;
      case '删除':
        if (output.length === 1) {
          props.onChange('0');
        } else {
          props.onChange(output.substring(0, output.length - 1))
        }
        break;
      case '清空':
        props.onChange('0');
        break;
      case 'OK':
        console.log('ok')
        break;
    }
  }
  return (
      <MyNumberSection>
        <div className="output">{output}</div>
        <div className="pad clearfix" onClick={onClickButtonWrapper}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </MyNumberSection>
  )
}
export default NumberPadSection