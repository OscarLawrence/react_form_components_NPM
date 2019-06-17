import * as React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../styles";
import {
  FontFamilyProperty,
  HeightProperty,
  WidthProperty,
  PaddingProperty,
  BorderRadiusProperty,
  BorderColorProperty,
  BorderStyleProperty,
  BorderWidthProperty,
  ColorProperty,
  FontSizeProperty,
  FontWeightProperty
} from "csstype";

interface errorObject {
  [key: string]: string;
}

export interface TextFieldProps {
  name?: string;
  fontFamily?: FontFamilyProperty;
  fontSize?: FontSizeProperty<string | number>;
  fontWeight?: FontWeightProperty;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  height?: HeightProperty<string | number>;
  width?: WidthProperty<string | number>;
  padding?: PaddingProperty<string | number>;
  placeholder?: string;
  placeholderColor?: ColorProperty;
  placeholderFontFamily?: FontFamilyProperty;
  placeholderFontSize?: FontSizeProperty<string | number>;
  placeholderFontWeight?: FontWeightProperty;
  textColor?: ColorProperty;
  errorColor?: ColorProperty;
  className?: string;
  id?: string;
  borderRadius?: BorderRadiusProperty<string | number>;
  borderColor?: BorderColorProperty;
  borderStyle?: BorderStyleProperty;
  borderWidth?: BorderWidthProperty<string | number>;
  style?: React.CSSProperties;
}

export interface TextFieldState {
  value: string;
}

class TextField extends React.Component<TextFieldProps, TextFieldState> {
  state = {
    value: ""
  };
  Textarea = styled.textarea`
    font-family: ${this.props.fontFamily || Fonts.standard};
    font-size: ${this.props.fontSize || "1.5em"};
    font-weight: ${this.props.fontWeight || "normal"};
    background-color: transparent;
    color: ${this.props.textColor || "black"};
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 1.25em;
    resize: none;
    border: none;
    ::placeholder,
    ::-webkit-textarea-placeholder {
      color: ${this.props.placeholderColor || Colors.subtle};
      font-family: ${props =>
        this.props.placeholderFontFamily || Fonts.standard};
    }
    :-ms-textarea-placeholder {
      color: ${this.props.placeholderColor || Colors.subtle};
      font-family: ${props =>
        this.props.placeholderFontFamily || Fonts.standard};
    }
    :placeholder-shown,
    ::-webkit-textarea-placeholder-shown {
      font-size: ${this.props.placeholderFontSize || "1.5em"};
      font-weight: ${this.props.placeholderFontWeight || "normal"};
    }
    :-ms-textarea-placeholder-shown {
      font-size: ${this.props.placeholderFontSize || "1.5em"};
      font-weight: ${this.props.placeholderFontWeight || "normal"};
    }
  `;
  componentWillMount() {
    if (localStorage["ContactText"]) {
      this.setState({ value: localStorage["ContactText"] });
    }
  }

  // styles
  WrapperStyles = {
    borderColor: this.props.borderColor || Colors.subtle,
    borderRadius: this.props.borderRadius || "3px",
    borderWidth: this.props.borderWidth || "1.5px",
    borderStyle: this.props.borderStyle || "solid",
    padding: this.props.padding || "1em",
    margin: "0 auto",
    height: this.props.height || "100%",
    width: this.props.width || "100%",
    boxSizing: "border-box" as "border-box"
  };

  Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ value: e.target.value });
    localStorage["ContactText"] = e.target.value;
    this.props.onChange && this.props.onChange(e);
  };

  render() {
    return (
      <div style={this.WrapperStyles}>
        <label htmlFor={this.props.name || "textarea"} />
        <this.Textarea
          onChange={this.Change}
          aria-label={this.props.name || "textarea"}
          value={this.state.value}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default TextField;
