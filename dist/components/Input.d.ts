import * as React from "react";
import { FontFamilyProperty, WidthProperty, ColorProperty } from "csstype";
export interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    labelSubtleColor?: ColorProperty;
    labelHighlightColor?: ColorProperty;
    labelFontFamily?: FontFamilyProperty;
    borderSubtleColor?: ColorProperty;
    borderHighlightColor?: ColorProperty;
    textColor?: ColorProperty;
    asteriskColor?: ColorProperty;
    errorColor?: ColorProperty;
    width?: WidthProperty<string | number>;
    fontFamily?: FontFamilyProperty;
    style?: React.CSSProperties;
    name?: string;
    id?: string;
    className?: string;
    error?: boolean;
    errorText?: string;
    required?: boolean;
    type?: string;
}
declare const Input: React.SFC<InputProps>;
export default Input;
