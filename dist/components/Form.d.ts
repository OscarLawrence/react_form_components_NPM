import * as React from "react";
export interface FormProps {
    style?: React.CSSProperties;
    name?: string;
    id?: string;
    className?: string;
    render?: (state: any, setState: any) => React.ReactNode;
}
export interface FormProps {
    style?: React.CSSProperties;
    name?: string;
    id?: string;
    className?: string;
    render?: (state: any, setState: any) => React.ReactNode;
}
export interface FormState {
}
declare class Form extends React.Component<FormProps, FormState> {
    state: {
        Name: {
            value: string;
            error: any[];
        };
    };
    updateState: (key: string, value: any) => void;
    getContent: () => any;
    render(): JSX.Element;
}
export default Form;
