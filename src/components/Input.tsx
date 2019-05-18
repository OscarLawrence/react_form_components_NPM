import * as React from "react";

import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { Colors, Fonts } from "../styles";
import {
  FontFamilyProperty,
  WidthProperty,
  ColorProperty,
  FontSizeProperty,
  FontWeightProperty
} from "csstype";

export interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  labelSubtleColor?: ColorProperty;
  labelHighlightColor?: ColorProperty;
  labelFontFamily?: FontFamilyProperty;
  labelFontWeight?: FontWeightProperty;
  borderSubtleColor?: ColorProperty;
  borderHighlightColor?: ColorProperty;
  textColor?: ColorProperty;
  asteriskColor?: ColorProperty;
  errorColor?: ColorProperty;
  width?: WidthProperty<string | number>;
  fontFamily?: FontFamilyProperty;
  fontSize?: FontSizeProperty<string | number>;
  fontWeight?: FontWeightProperty;
  style?: React.CSSProperties;
  name?: string;
  id?: string;
  className?: string;
  error?: boolean;
  errorText?: string;
  required?: boolean;
  type?: string;
}

const Input: React.SFC<InputProps> = props => {
  const [labelSpring, setLabelSpring] = useSpring(() => ({
    fontSize: "1.75em",
    color: props.labelSubtleColor || Colors.subtle,
    transform: "translateY(1.15em)"
  }));
  const [borderSpring, setBorderSpring] = useSpring(() => ({
    border: `1px solid`,
    borderColor: props.error
      ? Colors.error
      : props.borderSubtleColor || Colors.subtle,
    borderRadius: "5px"
  }));
  const Wrapper = styled.div`
    width: ${props.width || "100%"};
  `;
  const Input = styled.input`
    background-color: transparent;
    color: ${props.textColor || "black"};
    position: relative;
    z-index: 1;
    border: none;
    outline: none;
    width: 100%;
    font-size: ${props.fontSize || "1.5em"};
    font-weight: ${props.fontWeight || "inherit"}
    font-size: 1.5em;
    font-family: ${props.fontFamily || Fonts.standard};
  `;
  const Label = styled.label`
    display: inline-block;
    font-weight: ${props.labelFontWeight || "400"};
    font-family: ${props.labelFontFamily || Fonts.standard};
  `;
  const Asterisk = styled.div`
    color: ${props.asteriskColor || "black"};
    transform: translateX(0.2em);
  `;
  const Error = styled.div`
    font-family: ${Fonts.error};
    color: ${props.errorColor || Colors.error};
    text-align: left;
  `;
  const handleFocus = e => {
    e.preventDefault();
    setLabelSpring({
      fontSize: "1.25em",
      transform: "translateY(0em)",
      color: props.labelHighlightColor || Colors.highlight
    });
    setBorderSpring({
      borderColor: props.borderHighlightColor || Colors.highlight
    });
  };
  const handleUnFocus = e => {
    e.preventDefault();
    setLabelSpring({
      fontSize: e.target.value === "" ? "1.75em" : "1.25em",
      transform:
        e.target.value === "" ? "translateY(1.15em)" : "translateY(0em)",
      color: props.labelSubtleColor || Colors.subtle
    });
    setBorderSpring({
      borderColor: props.error
        ? Colors.error
        : props.borderSubtleColor || Colors.subtle
    });
  };

  return (
    <Wrapper>
      <animated.div style={{ ...labelSpring, zIndex: -1 }}>
        <Label>
          {props.label}
          {props.required ? <Asterisk>*</Asterisk> : null}
        </Label>
      </animated.div>
      <Input
        {...props}
        onFocus={handleFocus}
        aria-label={props.type || "text"}
        onBlur={handleUnFocus}
      />
      <animated.div style={borderSpring} />
      {props.error ? <Error>{props.errorText}</Error> : null}
    </Wrapper>
  );
};

export default Input;
