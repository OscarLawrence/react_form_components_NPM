import * as React from "react";
import { FontFamilyProperty, HeightProperty, WidthProperty, PaddingProperty, BorderRadiusProperty, BorderColorProperty, BorderStyleProperty, BorderWidthProperty, ColorProperty, FontSizeProperty, FontWeightProperty } from "csstype";
export interface TextFieldProps {
    name?: string;
    fontFamily?: FontFamilyProperty;
    fontSize?: FontSizeProperty<string | number>;
    fontWeight?: FontWeightProperty;
    onChange: (e: React.ChangeEvent) => void;
    height?: HeightProperty<string | number>;
    width?: WidthProperty<string | number>;
    padding?: PaddingProperty<string | number>;
    placeholder?: string;
    placeholderColor?: ColorProperty;
    placeholderFontFamily?: FontFamilyProperty;
    placeholderFontSize?: FontSizeProperty<string | number>;
    placeholderFontWeight?: FontWeightProperty;
    textColor?: ColorProperty;
    className?: string;
    id?: string;
    borderRadius?: BorderRadiusProperty<string | number>;
    borderColor?: BorderColorProperty;
    borderStyle?: BorderStyleProperty;
    borderWidth?: BorderWidthProperty<string | number>;
    style?: React.CSSProperties;
}
declare const TextField: React.SFC<TextFieldProps>;
export default TextField;
