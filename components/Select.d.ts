import * as React from "react";
export interface SelectProps {
    currentValue: string;
    options: object;
    onChange?: (value: any) => void;
    hoverColor?: string;
    width?: string;
    fontFamily?: string;
}
declare const Select: React.SFC<SelectProps>;
export default Select;
export interface SelectOptionProps {
    keyuser: boolean;
    onClick: (e: any) => void;
    value: string;
    key: number;
    hoverColor: string | null;
}
