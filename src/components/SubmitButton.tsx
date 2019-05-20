import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { Fonts } from "../styles";
import {
  ColorProperty,
  WidthProperty,
  BorderRadiusProperty,
  FontWeightProperty,
  BackgroundColorProperty,
  PaddingProperty,
  FontFamilyProperty,
  FontSizeProperty,
  MarginProperty,
  HeightProperty
} from "csstype";

export interface SubmitButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  backgroundcolor?: BackgroundColorProperty;
  fontWeight?: FontWeightProperty;
  fontFamily?: FontFamilyProperty;
  fontSize?: FontSizeProperty<string | number>;
  margin?: MarginProperty<string>;
  color?: ColorProperty;
  width?: WidthProperty<string | number>;
  height?: HeightProperty<string | number>;
  borderRadius?: BorderRadiusProperty<string | number>;
  padding?: PaddingProperty<string | number>;
  style?: React.CSSProperties;
}

const SubmitButton: React.SFC<SubmitButtonProps> = props => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props.width || "7.5em"};
    height: ${props.height || "auto"}
    margin: ${props.margin || "1em auto"};
    background-color: ${props.backgroundcolor || "#0994CC"};
    border-radius: ${props.borderRadius || "0.3em"};
    @media only screen and (max-width: 700px) {
      width: ${props.width || "30%"};
    }
  `;
  const styles = {
    cursor: "pointer",
    width: "100%",
    height: "100%",
    color: props.color || "white",
    fontWeight: props.fontWeight || "bold",
    padding: props.padding || "0.3em",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontFamily: props.fontFamily || Fonts.standard,
    fontSize: props.fontSize || "1.5em"
  };

  const [spring, set] = useSpring(() => ({
    transform: "scale(1)"
  }));

  const onMouseDown = e => {
    set({ transform: "scale(0.9)" });
  };
  const onMouseUp = e => {
    set({ transform: "scale(1)" });
  };
  return (
    <Wrapper onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      <animated.button
        disabled={props.disabled || false}
        {...props}
        aria-label="submit"
        style={{ ...styles, ...spring }}
      >
        {props.children}
      </animated.button>
    </Wrapper>
  );
};

export default SubmitButton;
