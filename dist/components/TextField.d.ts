import * as React from "react";
import { FontFamilyProperty, HeightProperty, WidthProperty, PaddingProperty, BorderRadiusProperty, BorderColorProperty, BorderStyleProperty, BorderWidthProperty, ColorProperty, FontSizeProperty, FontWeightProperty } from "csstype";
export interface TextFieldProps {
    name?: string;
    fontFamily?: FontFamilyProperty;
    fontSize?: FontSizeProperty<string | number>;
    fontWeight?: FontWeightProperty;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    height?: HeightProperty<string | number>;
    width?: WidthProperty<string | number>;
    padding?: PaddingProperty<string | number>;
    placeholder?: string;
    placeholderColor?: ColorProperty;
    placeholderFontFamily?: FontFamilyProperty;
    placeholderFontSize?: FontSizeProperty<string | number>;
    placeholderFontWeight?: FontWeightProperty;
    textColor?: ColorProperty;
    errorColor?: ColorProperty;
    className?: string;
    id?: string;
    borderRadius?: BorderRadiusProperty<string | number>;
    borderColor?: BorderColorProperty;
    borderStyle?: BorderStyleProperty;
    borderWidth?: BorderWidthProperty<string | number>;
    style?: React.CSSProperties;
}
export interface TextFieldProps {
    name?: string;
    fontFamily?: FontFamilyProperty;
    fontSize?: FontSizeProperty<string | number>;
    fontWeight?: FontWeightProperty;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    height?: HeightProperty<string | number>;
    width?: WidthProperty<string | number>;
    padding?: PaddingProperty<string | number>;
    placeholder?: string;
    placeholderColor?: ColorProperty;
    placeholderFontFamily?: FontFamilyProperty;
    placeholderFontSize?: FontSizeProperty<string | number>;
    placeholderFontWeight?: FontWeightProperty;
    textColor?: ColorProperty;
    errorColor?: ColorProperty;
    className?: string;
    id?: string;
    borderRadius?: BorderRadiusProperty<string | number>;
    borderColor?: BorderColorProperty;
    borderStyle?: BorderStyleProperty;
    borderWidth?: BorderWidthProperty<string | number>;
    style?: React.CSSProperties;
}
export interface TextFieldState {
}
declare class TextField extends React.Component<TextFieldProps, TextFieldState> {
    state: {
        value: string;
    };
    Textarea: import("styled-components").StyledComponent<"textarea", any, {}, never>;
    componentWillMount(): void;
    WrapperStyles: {
        borderColor: string;
        borderRadius: React.ReactText;
        borderWidth: React.ReactText;
        borderStyle: string;
        padding: React.ReactText;
        margin: string;
        height: React.ReactText;
        width: React.ReactText;
        boxSizing: "border-box";
    };
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}
export default TextField;
