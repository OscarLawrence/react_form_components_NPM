import * as React from "react";
export interface TextFieldProps {
    name?: string;
    fontFamily?: string;
    onChange: (e: any) => void;
    height?: string;
    width?: string;
    placeholder?: string;
    className?: string;
    id?: string;
}
declare const TextField: React.SFC<TextFieldProps>;
export default TextField;
