import * as React from "react";
import styled from "styled-components";

export interface FormProps {
  style?: React.CSSProperties;
  name?: string;
  id?: string;
  className?: string;
  render?: (state, setState) => React.ReactNode;
}

export interface FormProps {
  style?: React.CSSProperties;
  name?: string;
  id?: string;
  className?: string;
  render?: (state, setState) => React.ReactNode;
}

export interface FormState {}

class Form extends React.Component<FormProps, FormState> {
  state = { Name: { value: "", error: [] } };
  updateState = (key: string, value: any) => {
    this.setState({ [key]: value });
  };
  getContent = () => {
    if (this.props.render) {
      return this.props.render(this.state, this.setState);
    }
    if (typeof this.props.children === "function") {
      return this.props.children(this.state, this.updateState);
    }
    return this.props.children;
  };
  render() {
    return (
      <form method="POST" {...this.props} noValidate>
        {this.getContent()}
      </form>
    );
  }
}

export default Form;
