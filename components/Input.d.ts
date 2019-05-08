import * as React from "react";
export interface InputProps {
    width?: string | number;
    fontFamily?: string;
    error?: boolean;
    required?: boolean;
    type?: string;
    label: string;
}
declare const Input: React.SFC<InputProps>;
export default Input;
