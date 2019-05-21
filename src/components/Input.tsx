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
  error?: boolean;
  errorText?: errorObject;
  required?: boolean;
  type?: string;
}

const Input: React.SFC<InputProps> = props => {
  const [State, setState] = React.useState("");
  const [Errors, setErrors] = React.useState({});
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    initializeErrors();
  }, []);
  const initializeErrors = () => {
    if (props.errorText) {
      let errObject = {};
      for (let error in props.errorText) {
        errObject[error] = false;
      }
      setErrors(errObject);
    }
  };
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
  const Label = styled.label`
    display: flex;
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
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState(e.target.value);
    if (props.validationFunction) {
      const validation = props.validationFunction(e.target.value);
      console.log(validation);
      if (validation !== true) {
        console.log(Errors);
        for (let error in Errors) {
          if (error in validation) {
            console.log(error, validation);
            setErrors(
              Object.defineProperty(Errors, error, {
                enumerable: true,
                writable: false,
                configurable: true,
                value: true
              })
            );
          } else {
            console.log(error, validation);
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

        if (!error) {
          setError(true);
        }
      } else {
        setError(false);
      }
    }
  };
  const getErrors = () => {
    let errors = [];
    for (let error in Errors) {
      if (Errors[error]) {
        errors.push(props.errorText[error]);
      }
    }
    return errors.map((item, key) => {
      return <Error key={key}>{item}</Error>;
    });
  };
  console.log(Errors, Date.now());
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
        value={State}
        onChange={onChange}
      />
      <animated.div style={borderSpring} />
      {error ? getErrors() : null}
    </div>
  );
};

export default Input;
