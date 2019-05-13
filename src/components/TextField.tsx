import * as React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../styles";

export interface TextFieldProps {
  name?: string;
  fontFamily?: string;
  onChange: (e: React.ChangeEvent) => void;
  height?: string;
  width?: string;
  placeholder?: string;
  className?: string;
  id?: string;
}

const TextField: React.SFC<TextFieldProps> = props => {
  const Wrapper = styled.div`
    border: solid 1.5px ${Colors.subtle};
    border-radius: 3px;
    padding: 1em;
    margin: 0 auto;
    height: ${props.height || "100%"}
    width: ${props.width || "95%"};
    font-family: ${props.fontFamily || Fonts.standard};
    box-sizing: border-box;
  `;
  const Textarea = styled.textarea`
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 1.25em;
    resize: none;
    border: none;
  `;
  return (
    <Wrapper>
      <label htmlFor={props.name || "textarea"} />
      <Textarea
        onChange={props.onChange}
        aria-label={props.name || "textarea"}
        {...props}
      />
    </Wrapper>
  );
};

export default TextField;
