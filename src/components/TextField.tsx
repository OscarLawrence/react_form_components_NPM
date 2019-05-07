import * as React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../styles";

export interface TextFieldProps {
  type?: string;
  fontFamily?: string;
}

const TextField: React.SFC<TextFieldProps> = props => {
  const Wrapper = styled.div`
    border: solid 1.5px ${Colors.subtle};
    border-radius: 3px;
    padding: 1em;
    margin: 0 auto;
    width: 95%;
    font-family: ${props.fontFamily || Fonts.standard};
    box-sizing: border-box;
  `;
  const Textarea = styled.textarea`
    width: 100%;
    outline: none;
    font-size: 1.25em;
    resize: none;
    border: none;
  `;
  return (
    <Wrapper>
      <label htmlFor={props.type || "textarea"} />
      <Textarea aria-label={props.type || "textarea"} {...props} />
    </Wrapper>
  );
};

export default TextField;
