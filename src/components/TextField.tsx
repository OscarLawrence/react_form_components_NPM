import * as React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../styles";
import {
  FontFamilyProperty,
  HeightProperty,
  WidthProperty,
  PaddingProperty,
  BorderRadiusProperty,
  BorderColorProperty,
  BorderStyleProperty,
  BorderWidthProperty
} from "csstype";

export interface TextFieldProps {
  name?: string;
  fontFamily?: FontFamilyProperty;
  onChange: (e: React.ChangeEvent) => void;
  height?: HeightProperty<string | number>;
  width?: WidthProperty<string | number>;
  padding?: PaddingProperty<string | number>;
  placeholder?: string;
  className?: string;
  id?: string;
  borderRadius?: BorderRadiusProperty<string | number>;
  borderColor?: BorderColorProperty;
  borderStyle?: BorderStyleProperty;
  borderWidth?: BorderWidthProperty<string | number>;
  style?: React.CSSProperties;
}

const TextField: React.SFC<TextFieldProps> = props => {
  const Wrapper = styled.div`
    border-color: ${props.borderColor || Colors.subtle};
    border-radius: ${props.borderRadius || "3px"};
    border-width: ${props.borderWidth || "1.5px"};
    border-style: ${props.borderStyle || "solid"};
    padding: ${props.padding || "1em"};
    margin: 0 auto;
    height: ${props.height || "100%"}
    width: ${props.width || "100%"};
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
