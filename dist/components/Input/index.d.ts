import * as React from "react";
import { ColorProperty, FontFamilyProperty, FontSizeProperty } from "csstype";
export interface InputProps {
    label: string;
    validate: (value: string) => string[];
    state: string;
    setState: (key: string, value: any) => void;
    required?: boolean;
    highlightColor?: ColorProperty;
    subtleColor?: ColorProperty;
    labelColor?: ColorProperty;
    labelFontFamily?: FontFamilyProperty;
    labelFontSize?: FontSizeProperty<string | number>;
    inputFontSize?: FontSizeProperty<string | number>;
    inputFontFamily?: FontFamilyProperty;
    inputColor?: ColorProperty;
    errorColor?: ColorProperty;
    errorFontFamily?: FontFamilyProperty;
    errorFontSize?: FontSizeProperty<string | number>;
}
declare const Input: React.SFC<InputProps>;
export default Input;
