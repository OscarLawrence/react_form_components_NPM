//__________General Imports___________
import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

//_________Custom Imports_______________
import { Colors, Fonts } from "../../styles";
import { ColorProperty, FontFamilyProperty, FontSizeProperty } from "csstype";

// helpers
import { getError, hasError, getLabelColor } from "./helpers";

//________Context_________
import { FormStateContext } from "../context/context";

//__________Properties__________
export interface InputProps {
  // required properties
  label: string;
  name: string;
  validate: (value: string) => string[];
  // additional properties
  required?: boolean;
  highlightColor?: ColorProperty;
  subtleColor?: ColorProperty;

  // LabelProperties
  labelColor?: ColorProperty;
  labelFontFamily?: FontFamilyProperty;
  labelFontSize?: FontSizeProperty<string | number>;

  //InputProperties
  inputFontSize?: FontSizeProperty<string | number>;
  inputFontFamily?: FontFamilyProperty;
  inputColor?: ColorProperty;

  // error
  errorColor?: ColorProperty;
  errorFontFamily?: FontFamilyProperty;
  errorFontSize?: FontSizeProperty<string | number>;
}

//__________Styles____________

const Wrapper = styled.div`
  margin-top: 0.75em;
`;

// Label

interface labelProps {
  color: ColorProperty;
  labelFontFamily: FontFamilyProperty;
  labelFontSize: FontSizeProperty<string | number>;
}

const Label = styled.p`
  z-index: -1;
  pointer-events: none;
  margin: 0;
  position: absolute;
  color: ${(p: labelProps) => p.color};
  font-family: ${(p: labelProps) => p.labelFontFamily || Fonts.label};
`;

// Input
interface InputTagProps {
  error: boolean;
  errorColor: ColorProperty;
  subtleColor: ColorProperty;
  inputFontSize: FontSizeProperty<number | string>;
  inputFontFamily: FontFamilyProperty;
  inputColor: ColorProperty;
  highlightColor: ColorProperty;
}

const InputTag = styled.input`
    border: none;
    border-bottom: solid;
    border-color: ${(props: InputTagProps) =>
      props.error
        ? props.errorColor || Colors.error
        : props.subtleColor || Colors.subtle}
    width: 100%;
    font-size: ${(props: InputTagProps) =>
      props.inputFontSize || Fonts.inputFontSize};
    font-family: ${(props: InputTagProps) =>
      props.inputFontFamily || Fonts.input}
    color: ${(p: InputTagProps) => p.inputColor || Colors.input}
    outline: 0;
    &:focus {
        border-color: ${(p: InputTagProps) =>
          p.highlightColor || Colors.highlight}
        
    }
  `;

// __Errors
interface ErrorProps {
  errorColor: ColorProperty;
  errorFontFamily: FontFamilyProperty;
  errorFontSize: FontSizeProperty<number | string>;
}

const Error = styled.div`
  text-align: left;
  color: ${(props: ErrorProps) => props.errorColor || Colors.error};
  font-family: ${(props: ErrorProps) => props.errorFontFamily || Fonts.error};
  font-size: ${(props: ErrorProps) =>
    props.errorFontSize || Fonts.errorFontSize};
`;

const ErrorText = styled.p`
    font-size: 0.75em;
    font-family: ${Fonts.error}
    margin: 0;
`;

const Input: React.SFC<InputProps> = props => {
  const State = React.useContext(FormStateContext);
  const [Focus, setFocus] = React.useState(false);
  const [Empty, setEmpty] = React.useState(true);

  const [labelSpringProps, setLabel] = useSpring(() => ({
    transform: "translateY(0em)",
    fontSize: props.labelFontSize || Fonts.labelFontSize,
    color: props.labelColor || Colors.label
  }));
  const handleFocus = e => {
    e.preventDefault();
    setFocus(true);
    setLabel({
      transform: "translateY(-1em)",
      fontSize: "0.75em",
      color: props.highlightColor || Colors.highlight
    });
  };
  const handleBlur = e => {
    e.preventDefault();
    setFocus(false);
    if (e.target.value.length === 0) {
      setLabel({
        transform: "translateY(0em)",
        fontSize: props.labelFontSize || Fonts.labelFontSize,
        color: props.labelColor || Colors.label
      });
    } else {
      setLabel({ color: props.labelColor || Colors.label });
    }
  };
  const onChange = e => {
    const error = props.validate(e.target.value);
    State.update(props.name, { value: e.target.value, error: error });
    if (e.target.value.length > 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  };
  return (
    <Wrapper>
      <animated.div style={labelSpringProps}>
        <Label
          color={getLabelColor(State, Focus, Empty, props)}
          labelFontFamily={props.labelFontFamily}
          labelFontSize={props.labelFontSize}
        >
          {props.label}
          {props.required && "*"}
        </Label>
      </animated.div>
      <InputTag
        error={hasError(State, props)}
        errorColor={props.errorColor}
        highlightColor={props.highlightColor}
        subtleColor={props.subtleColor}
        inputFontSize={props.inputFontSize}
        inputFontFamily={props.inputFontFamily}
        inputColor={props.inputColor}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />

      <Error
        errorFontFamily={props.errorFontFamily}
        errorColor={props.errorColor}
        errorFontSize={props.errorFontSize}
      >
        {getError(State, props).map((err, i) => {
          return <ErrorText key={i}>{err}</ErrorText>;
        })}
      </Error>
    </Wrapper>
  );
};

export default Input;
