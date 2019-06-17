import * as React from "react";
import { FontFamilyProperty, ColorProperty, FontSizeProperty, FontWeightProperty } from "csstype";
export interface InputProps {
    className: string;
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string | undefined;
    textColor: ColorProperty | undefined;
    fontSize: FontSizeProperty<string | number> | undefined;
    fontWeight?: FontWeightProperty | undefined;
    fontFamily?: FontFamilyProperty | undefined;
}
declare const StyledInput: import("styled-components").StyledComponent<React.FunctionComponent<InputProps>, any, {}, never>;
export default StyledInput;
