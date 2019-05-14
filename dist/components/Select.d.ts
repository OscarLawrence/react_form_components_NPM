import * as React from "react";
import { WidthProperty, FontFamilyProperty, ColorProperty } from "csstype";
export interface SelectProps {
    currentValue: string;
    options: object;
    onChange: (e: React.FormEvent<HTMLDivElement>) => void;
    hoverColor?: ColorProperty;
    width?: WidthProperty<string | number>;
    fontFamily?: FontFamilyProperty;
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
