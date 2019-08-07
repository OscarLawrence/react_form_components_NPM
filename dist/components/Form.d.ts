import * as React from "react";
export interface FormProps {
    style?: React.CSSProperties;
    name?: string;
    id?: string;
    className?: string;
    render?: (context: any) => React.ReactNode;
    onChange?: (state: any) => void;
    onSubmit?: (state: any) => void;
}
export interface FormState {
    FormState: object;
}
declare class Form extends React.Component<FormProps, FormState> {
    state: {
        FormState: {};
    };
    update: (key: any, value: any) => void;
    getContent: () => any;
    onSubmit: (e: any) => void;
    render(): JSX.Element;
}
export default Form;
