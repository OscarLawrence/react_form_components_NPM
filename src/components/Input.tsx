import * as React from "react";

import styled from "styled-components";
import { useSpring, animated } from "react-spring";

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
    transform: "translateY(1.2em)",
    lineHeight: "1em"
  }));
  const [borderSpring, setBorderSpring] = useSpring(() => ({
    backgroundColor: props.error ? Colors.error : Colors.subtle
  }));
  const Wrapper = styled.div``;
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
    display: flex;
    font-weight: 400;
    font-family: ${props.fontFamily || Fonts.standard};
  `;
  const Asterisk = styled.div`
    color: black;
    transform: translateX(0.2em);
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
      color: Colors.highlight,
      lineHeight: "1.5em"
    });
    setBorderSpring({
      backgroundColor: Colors.highlight
    });
  };
  const handleUnFocus = e => {
    e.preventDefault();
    setLabelSpring({
      fontSize: e.target.value === "" ? "1.5em" : "1em",
      lineHeight: e.target.value === "" ? "1em" : "1.5em",
      transform:
        e.target.value === "" ? "translateY(1.25em)" : "translateY(0em)",
      color: Colors.subtle
    });
    setBorderSpring({
      backgroundColor: props.error ? Colors.error : Colors.subtle
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
      <animated.div style={borderSpring}>
        <Underline />
      </animated.div>
      {props.error ? <Error>{props.errorText}</Error> : null}
    </Wrapper>
  );
};

export default Input;
