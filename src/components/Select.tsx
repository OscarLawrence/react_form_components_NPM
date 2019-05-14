import * as React from "react";
import styled from "styled-components";
import { useTransition, useSpring, animated } from "react-spring";
import { generate } from "shortid";

import { Colors, Fonts } from "../styles";
import { WidthProperty, FontFamilyProperty, ColorProperty } from "csstype";

export interface SelectProps {
  currentValue: string;
  options: object;
  onChange: (e: React.FormEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
  hoverColor?: ColorProperty;
  width?: WidthProperty<string | number>;
  fontFamily?: FontFamilyProperty;
}

const Select: React.SFC<SelectProps> = props => {
  const [open, setOpen] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState(props.currentValue);
  const [keyUser, setKeyUser] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("mouseup", handleOutsideClick, true);
    document.addEventListener("keydown", kbUser, true);
    return () => {
      document.removeEventListener("keydown", kbUser, true);
      document.removeEventListener("mouseup", handleOutsideClick, true);
    };
  });

  // animations
  const transitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const selectID = generate();

  const kbUser = e => {
    if (e.keyCode === 9) {
      setKeyUser(true);
      document.removeEventListener("keydown", kbUser, true);
    }
  };

  const handleOutsideClick = e => {
    e.preventDefault();
    const wrapper = document.getElementById(selectID);
    if (!wrapper.contains(e.target) && open) {
      setOpen(false);
    }
  };
  const SelectWrapper = styled.div`
    margin: 1em;
    width: ${props.width || 100};
    font-family: ${props.fontFamily || Fonts.standard};
  `;
  const SelectButton = styled.button`
    padding: 0 0.5em 0 0;
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: solid;
    outline: ${keyUser ? "  " : "none"};
  `;
  const Arrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 0.25em;
    transform: translateX(0.3em) translateY(-0.15em) rotate(45deg);
  `;
  const toggle = e => {
    e.preventDefault();
    setOpen(!open);
  };
  const handleSelect = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    // @ts-ignore
    setCurrentValue(e.target.innerText);
    setOpen(false);
    props.onChange(e);
  };
  return (
    <SelectWrapper {...props} id={selectID}>
      <SelectButton onClick={toggle}>
        {currentValue}
        <Arrow />
      </SelectButton>
      {transitions.map(
        transitionProps =>
          transitionProps.item && (
            <animated.div
              key={transitionProps.key}
              style={{ ...transitionProps.props, position: "absolute" }}
            >
              <div style={{ width: "100%" }}>
                {Object.keys(props.options).map((optionKey, i) => {
                  return (
                    <SelectOption
                      keyuser={keyUser}
                      onClick={handleSelect}
                      value={optionKey}
                      key={i}
                      hoverColor={props.hoverColor}
                    >
                      {props.options[optionKey]}
                    </SelectOption>
                  );
                })}
              </div>
            </animated.div>
          )
      )}
    </SelectWrapper>
  );
};

export default Select;

export interface SelectOptionProps {
  keyuser: boolean;
  onClick: (e) => void;
  value: string;
  key: number;
  hoverColor: string | null;
}

const SelectOption: React.SFC<SelectOptionProps> = props => {
  const [spring, set] = useSpring(() => ({
    backgroundColor: "white"
  }));

  //__option button styles__
  const optionStyle = {
    width: "100%",
    outline: props.keyuser ? "" : "none",
    borderStyle: "none none solid none",
    borderWidth: "0px",
    borderRadius: "5px",
    cursor: "pointer",
    padding: ".3em 0",
    display: "block",
    left: 0,
    right: 0
  };
  const mouseEnter = e => {
    e.preventDefault();
    set({
      backgroundColor: props.hoverColor ? props.hoverColor : Colors.subtle
    });
  };
  const mouseLeave = e => {
    e.preventDefault();
    set({ backgroundColor: "white" });
  };
  return (
    <animated.button
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={props.onClick}
      value={props.value}
      style={{ ...optionStyle, ...spring }}
    >
      {props.children}
    </animated.button>
  );
};
