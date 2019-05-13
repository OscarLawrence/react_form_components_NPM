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
  required?: boolean;
  type?: string;
  label: string;
}

const Input: React.SFC<InputProps> = props => {
  const InputWrapper = styled.div`
    margin-bottom: ${props.error ? "0.2em" : "0.1em"};
  `;
  const Input = styled.input`
    border: none;
    outline: none;
    width: ${props.width || "100%"};
    font-size: 1.5em;
    font-family: ${props.fontFamily || Fonts.standard};
  `;
  const Info = styled.label`
    text-align: left;
    display: block;
    pointer-events: none;
    height: 1.5rem;
    font-weight: 400;
    font-family: ${props.fontFamily || Fonts.standard};
  `;

  const bStyle = {
    padding: 0,
    height: "2px",
    borderRadius: "5px",
    margin: "0 auto",
    transform: "translateY(-1.25em)"
  };

  const [spring, set] = useSpring(() => ({
    fontSize: "1.5em",
    transform: "translateY(-1.25em)",
    color: Colors.subtle,
    config: { velocity: 20 }
  }));

  const [borderSpring, setBorder] = useSpring(() => ({
    backgroundColor: Colors.subtle
  }));

  const handleFocus = (e: any) => {
    e.preventDefault();
    set({
      fontSize: "1em",
      transform: "translateY(-3.1em)",
      color: Colors.highlight
    });
    setBorder({
      backgroundColor: Colors.highlight
    });
  };
  const handleUnFocus = (e: any) => {
    e.preventDefault();
    set({
      fontSize: e.target.value === "" ? "1.5em" : "1em",
      transform:
        e.target.value === "" ? "translateY(-1.25em)" : "translateY(-3em)",
      color: Colors.subtle
    });
    setBorder({
      backgroundColor: Colors.subtle
    });
  };
  return (
    <InputWrapper style={{ marginBottom: props.error ? "0.1em" : 0 }}>
      <animated.div style={spring}>
        <Info htmlFor={props.type || "text"}>
          {props.label}{" "}
          {props.required ? (
            <img
              style={{
                width: "7.5px",
                height: "7.5px",
                transform: "translateY(-100%)"
              }}
              alt="is required asterisk"
              src={Asterisk}
            />
          ) : null}
        </Info>
      </animated.div>
      <Input
        {...props}
        onFocus={handleFocus}
        aria-label={props.type || "text"}
        onBlur={handleUnFocus}
      />

      <animated.div style={{ ...borderSpring, ...bStyle }} />
      {props.error ? (
        <div
          style={{
            textAlign: "left",
            transform: "translateY(-1.2em)",
            fontFamily: Fonts.error
          }}
        >
          {props.error}
        </div>
      ) : (
        ""
      )}
    </InputWrapper>
  );
};

export default Input;
