import * as React from "react";

import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Asterisk = require("../assets/asterisk.png");

import { Colors, Fonts } from "../styles";

export interface InputProps {
  width?: string | number;
  fontFamily?: string;
  onChange: (e: React.ChangeEvent) => void;
  name?: string;
  id?: string;
  className?: string;
  error?: boolean;
  errorText?: string;
  required?: boolean;
  type?: string;
  label: string;
}

const Input: React.SFC<InputProps> = props => {
  const [labelSpring, setLabelSpring] = useSpring(() => ({
    fontSize: "1.5em",
    color: Colors.subtle,
    transform: "translateY(1.2em)"
  }));
  const [borderSpring, setBorderSpring] = useSpring(() => ({
    backgroundColor: Colors.subtle
  }));
  const Wrapper = styled.div`
    margin-bottom: ${props.error ? "0.2em" : "0.1em"};
  `;
  const Input = styled.input`
    background-color: transparent;
    position: relative;
    z-index: 1;
    border: none;
    outline: none;
    width: ${props.width || "100%"};
    font-size: 1.5em;
    font-family: ${props.fontFamily || Fonts.standard};
  `;
  const Label = styled.label`
    font-weight: 400;
    font-family: ${props.fontFamily || Fonts.standard};
  `;
  const Underline = styled.div`
    padding: 0;
    height: 2px;
    border-radius: 5px;
    margin: 0 auto;
  `;
  const Error = styled.div`
    font-family: ${Fonts.error};
    color: ${Colors.error};
  `;
  const handleFocus = e => {
    e.preventDefault();
    setLabelSpring({
      fontSize: "1em",
      transform: "translateY(0em)",
      color: Colors.highlight
    });
    setBorderSpring({
      backgroundColor: Colors.highlight
    });
  };
  const handleUnFocus = e => {
    e.preventDefault();
    setLabelSpring({
      fontSize: e.target.value === "" ? "1.5em" : "1em",
      transform:
        e.target.value === "" ? "translateY(1.25em)" : "translateY(0em)",
      color: Colors.subtle
    });
    setBorderSpring({
      backgroundColor: Colors.subtle
    });
  };
  return (
    <Wrapper>
      <animated.div style={{ ...labelSpring, zIndex: -1 }}>
        <Label>{props.label}</Label>
      </animated.div>
      <Input
        {...props}
        onFocus={handleFocus}
        aria-label={props.type || "text"}
        onBlur={handleUnFocus}
      />
      <animated.div style={borderSpring}>
        <Underline />
      </animated.div>
      {props.error ? <Error>{props.errorText}</Error> : null}
    </Wrapper>
  );
};

export default Input;
