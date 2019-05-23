import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { Colors, Fonts } from "../../styles";
import {
  FontFamilyProperty,
  WidthProperty,
  ColorProperty,
  FontSizeProperty,
  FontWeightProperty
} from "csstype";

// subcomponents
import StyledLabel from "./Label";
import StyledInput from "./Input";

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
  const [currentErrors, setCurrentErrors] = React.useState([]);
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

  // styles
  const Error = styled.div`
    font-family: ${Fonts.error};
    color: ${props.errorColor || Colors.error};
    text-align: left;
  `;

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
    if (props.validationFunction && props.errors) {
      const validation = props.validationFunction(e.target.value);
      if (validation !== true) {
        let newErrors = [];
        for (let err of validation) {
          Object.keys(props.errors).includes(err) &&
            newErrors.push(props.errors[err]);
        }
        setCurrentErrors(newErrors);
        !error && setError(true);
      } else {
        currentErrors.length > 0 && setCurrentErrors([]);
        error && setError(false);
      }
    }
  };

  return (
    <div style={{ width: props.width || "100%" }}>
      <animated.div style={{ ...labelSpring, zIndex: -1 }}>
        <StyledLabel
          for="InputElement"
          label="Input"
          className="Input"
          asteriskColor={props.asteriskColor}
          required={props.required}
          fontWeight={props.labelFontWeight}
          fontFamily={props.labelFontFamily}
        />
      </animated.div>
      <StyledInput
        className="InputElement"
        onFocus={handleFocus}
        type={props.type}
        textColor={props.textColor}
        fontSize={props.fontSize}
        fontWeight={props.fontWeight}
        fontFamily={props.fontFamily}
        onBlur={handleUnFocus}
        onChange={onChange}
      />
      <animated.div style={borderSpring} />
      {error &&
        currentErrors.map((item, key) => {
          return <Error key={key}>{item}</Error>;
        })}
    </div>
  );
};

export default Input;
