import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import {
  FontFamilyProperty,
  WidthProperty,
  ColorProperty,
  FontSizeProperty,
  FontWeightProperty
} from "csstype";

import { Colors, Fonts } from "../styles";

export interface errorObject {
  [key: string]: string;
}

export interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  errors?: errorObject;
  error?: string[];
  required?: boolean;
  type?: string;
}

// styles
const Error = styled.div`
  font-family: ${Fonts.error};
  color: ${props => props.color || Colors.error}
  text-align: left;
`;

const Asterisk = styled.div`
  color: ${props => props.color || "black"};
  transform: translateX(0.2em);
`;

const Label = styled.label`
  font-weight: 400;
`;

const Input: React.SFC<InputProps> = props => {
  const [error, setError] = React.useState(false);
  // animations
  const [labelSpring, setLabelSpring] = useSpring(() => ({
    fontSize: "1.5em",
    color: props.labelSubtleColor || Colors.subtle,
    transform: "translateY(1.15em)",
    lineHeight: "1em"
  }));
  const [borderSpring, setBorderSpring] = useSpring(() => ({
    border: `1px solid`,
    borderColor: error
      ? Colors.error
      : props.borderSubtleColor || Colors.subtle,
    borderRadius: "5px"
  }));

  // functions
  const handleFocus = e => {
    e.preventDefault();
    setLabelSpring({
      fontSize: "1em",
      transform: "translateY(0em)",
      color: props.labelHighlightColor || Colors.highlight,
      lineHeight: "1.5em"
    });
    setBorderSpring({
      borderColor: props.borderHighlightColor || Colors.highlight
    });
  };
  const handleUnFocus = e => {
    e.preventDefault();
    setLabelSpring({
      fontSize: e.target.value === "" ? "1.5em" : "1em",
      lineHeight: e.target.value === "" ? "1em" : "1.5em",
      transform:
        e.target.value === "" ? "translateY(1.15em)" : "translateY(0em)",
      color: props.labelSubtleColor || Colors.subtle
    });
    setBorderSpring({
      borderColor: error
        ? Colors.error
        : props.borderSubtleColor || Colors.subtle
    });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.onChange && props.onChange(e);
  };
  return (
    <div style={{ width: props.width || "100%" }}>
      <animated.div style={{ ...labelSpring, zIndex: -1 }}>
        <Label htmlFor={props.label}>
          {props.label}
          {props.required && <Asterisk color={props.errorColor}>*</Asterisk>}
        </Label>
      </animated.div>
      <animated.div style={borderSpring} />
    </div>
  );
};

export default Input;
