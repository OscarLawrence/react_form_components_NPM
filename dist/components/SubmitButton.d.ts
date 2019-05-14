import * as React from "react";
import { ColorProperty, WidthProperty, BorderRadiusProperty, FontWeightProperty, BackgroundColorProperty, PaddingProperty } from "csstype";
export interface SubmitButtonProps {
    backgroundColor?: BackgroundColorProperty;
    fontWeight?: FontWeightProperty;
    color?: ColorProperty;
    width?: WidthProperty<string | number>;
    borderRadius?: BorderRadiusProperty<string | number>;
    padding?: PaddingProperty<string | number>;
    style?: React.CSSProperties;
}
declare const SubmitButton: React.SFC<SubmitButtonProps>;
export default SubmitButton;
