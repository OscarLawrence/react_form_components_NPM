import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { generate } from "shortid";

import { Colors, Fonts } from "../styles";

export interface SelectProps {
  currentValue: string;
  options: object;
  onChange: any;
  hoverColor?: string;
  width?: string;
  fontFamily?: string;
}

const Select: React.SFC<SelectProps> = props => {
  // useState for open/close
  const [open, setOpen] = React.useState(false);
  const [currentValue, setValue] = React.useState(props.currentValue);
  const [keyUser, setKeyUser] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("mouseup", handleOutsideClick, true);
    document.addEventListener("keydown", kbUser, true);
    return () => {
      document.removeEventListener("keydown", kbUser, true);
      document.removeEventListener("mouseup", handleOutsideClick, true);
    };
  });

  const kbUser = e => {
    if (e.keyCode === 9) {
      setKeyUser(true);
      document.removeEventListener("keydown", kbUser, true);
    }
  };

  const selectID = generate();

  const handleOutsideClick = e => {
    e.preventDefault();
    const wrapper = document.getElementById(selectID);
    if (!wrapper.contains(e.target) && open) {
      setOpen(false);
    }
  };

  // _______Styles__________
  //__outerDiv Styles__
  const selectBoxStyles = {
    left: 0,
    right: 0,
    width: "100%",
    margin: "1em auto"
  };

  //__options div styles__
  const Options = styled.div`
    border-style: none solid solid solid;
    border-width: 0px;
    border-radius: 5px;
    box-shadow: 0px 12px 37px 1px rgba(0, 0, 0, 0.47);
    position: absolute;
    width: ${props.width || 100};
    font-family: ${props.fontFamily || Fonts.standard};
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 999;
  `;
  //__selectButton Style__
  const SelectButton = styled.button`
    border-style: none none solid none;
    border-width: 1px;
    border-color: black;
    cursor: pointer;
    font-family: ${props.fontFamily || Fonts.standard};
    width: ${props.width || 100};
    text-align: left;
    background-color: transparent;
    outline: ${keyUser ? "  " : "none"};
  `;

  // ______handler______
  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  };
  const handleSelect = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore
    setValue(e.target.innerText);
    setOpen(false);
    props.onChange(e);
  };
  const Arrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 0.25em;
    transform: translateX(0.3em) translateY(-0.15em) rotate(45deg);
  `;
  return (
    <div style={selectBoxStyles} id={selectID} className="selectBox">
      <SelectButton onClick={toggle}>
        {currentValue}
        <Arrow />
      </SelectButton>
      {open ? (
        <Options className="selectOptions">
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
        </Options>
      ) : null}
    </div>
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
