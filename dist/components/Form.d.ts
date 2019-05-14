import * as React from "react";
export interface FormProps {
    style?: React.CSSProperties;
    name?: string;
    id?: string;
    className?: string;
}
declare const Form: React.SFC<FormProps>;
export default Form;
