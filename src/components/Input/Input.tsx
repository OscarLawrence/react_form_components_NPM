import * as React from "react";
import styled from "styled-components";

import {
  FontFamilyProperty,
  ColorProperty,
  FontSizeProperty,
  FontWeightProperty
} from "csstype";
// custom
import { Fonts } from "../../styles";

export interface InputProps {
  className: string;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string | undefined;
  textColor: ColorProperty | undefined;
  fontSize: FontSizeProperty<string | number> | undefined;
  fontWeight?: FontWeightProperty | undefined;
  fontFamily?: FontFamilyProperty | undefined;
}

const Input: React.SFC<InputProps> = props => {
  return (
    <input
      className={props.className}
      onFocus={props.onFocus}
      aria-label={props.type || "text"}
      onBlur={props.onBlur}
      onChange={props.onChange}
    />
  );
};

const StyledInput = styled(Input)`
  background-color: transparent;
  color: ${props => props.textColor || "black"};
  position: relative;
  z-index: 1;
  border: none;
  outline: none;
  width: 100%;
  font-size: ${props => props.fontSize || "1.5em"};
  font-weight: ${props => props.fontWeight || "inherit"};
  font-family: ${props => props.fontFamily || Fonts.standard};
`;

export default StyledInput;
