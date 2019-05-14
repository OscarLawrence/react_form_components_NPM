import * as React from "react";
import { FontFamilyProperty, HeightProperty, WidthProperty, PaddingProperty, BorderRadiusProperty, BorderColorProperty, BorderStyleProperty, BorderWidthProperty } from "csstype";
export interface TextFieldProps {
    name?: string;
    fontFamily?: FontFamilyProperty;
    onChange: (e: React.ChangeEvent) => void;
    height?: HeightProperty<string | number>;
    width?: WidthProperty<string | number>;
    padding?: PaddingProperty<string | number>;
    placeholder?: string;
    className?: string;
    id?: string;
    borderRadius?: BorderRadiusProperty<string | number>;
    borderColor?: BorderColorProperty;
    borderStyle?: BorderStyleProperty;
    borderWidth?: BorderWidthProperty<string | number>;
}
declare const TextField: React.SFC<TextFieldProps>;
export default TextField;
