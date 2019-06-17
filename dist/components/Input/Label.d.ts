import * as React from "react";
import { FontFamilyProperty, FontWeightProperty, ColorProperty } from "csstype";
export interface LabelProps {
    for: string;
    label: string;
    className: string;
    required: boolean;
    fontWeight: FontWeightProperty | undefined;
    fontFamily: FontFamilyProperty | undefined;
    asteriskColor: ColorProperty | undefined;
}
declare const StyledLabel: import("styled-components").StyledComponent<React.FunctionComponent<LabelProps>, any, {}, never>;
export default StyledLabel;
