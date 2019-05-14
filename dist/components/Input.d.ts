import * as React from "react";
import { FontFamilyProperty, WidthProperty } from "csstype";
export interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
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
