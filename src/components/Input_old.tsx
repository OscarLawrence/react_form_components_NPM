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

import { createStyled } from "../lib/helpers";

interface errorObject {
  [key: string]: string;
}

export interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validationFunction?: (value: string) => string[] | true;
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
  required?: boolean;
  type?: string;
}

const Input: React.SFC<InputProps> = props => {
  // state
  const [Errors, setErrors] = React.useState({});
  const [error, setError] = React.useState(false);

  // initialize errors
  React.useEffect(() => {
    initializeErrors();
  }, []);
  const initializeErrors = () => {
    if (props.errors) {
      let errObject = {};
      for (let error in props.errors) {
        errObject[error] = false;
      }
      setErrors(errObject);
    }
  };

  // handle errorColors
  React.useEffect(() => {
    setLabelSpring({
      color: error
        ? Colors.error
        : props.labelHighlightColor || Colors.highlight
    });
    setBorderSpring({
      borderColor: error
        ? Colors.error
        : props.borderHighlightColor || Colors.highlight
    });
  }, [error]);

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

  // styles
  const wrapperStyles = {
    width: props.width || "100%"
  };
  const InputStyle = {
    backgroundColor: "transparent",
    color: props.textColor || "black",
    position: "relative" as "relative",
    zIndex: 1,
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: props.fontSize || "1.5em",
    fontWeight: props.fontWeight || "inherit",
    fontFamily: props.fontFamily || Fonts.standard
  };
  const Label = createStyled(
    "label",
    `
  display: flex;
  font-weight: ${props.labelFontWeight || "400"};
  font-family: ${props.labelFontFamily || Fonts.standard};
`
  );
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
    if (props.validationFunction) {
      const validation = props.validationFunction(e.target.value);
      if (validation !== true) {
        for (let error in Errors) {
          if (validation.includes(error)) {
            setErrors(
              Object.defineProperty(Errors, error, {
                enumerable: true,
                writable: false,
                configurable: true,
                value: true
              })
            );
          } else {
            setErrors(
              Object.defineProperty(Errors, error, {
                enumerable: true,
                writable: false,
                configurable: true,
                value: false
              })
            );
          }
        }
        setError(true);
      } else {
        setError(false);
      }
    }
    props.onChange && props.onChange(e);
  };
  const getErrors = () => {
    let errors = [];
    for (let error in Errors) {
      if (Errors[error]) {
        errors.push(props.errors[error]);
      }
    }
    console.log(errors);
    return errors.map((item, key) => {
      return <Error key={key}>{item}</Error>;
    });
  };
  return (
    <div style={wrapperStyles}>
      <animated.div style={{ ...labelSpring, zIndex: -1 }}>
        <Label>
          {props.label}
          {props.required ? <Asterisk>*</Asterisk> : null}
        </Label>
      </animated.div>
      <input
        style={InputStyle}
        onFocus={handleFocus}
        aria-label={props.type || "text"}
        onBlur={handleUnFocus}
        onChange={onChange}
      />
      <animated.div style={borderSpring} />
      {error ? getErrors() : null}
    </div>
  );
};

export default Input;
