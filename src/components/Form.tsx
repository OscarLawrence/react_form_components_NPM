import * as React from "react";
import styled from "styled-components";

import { FormStateContext } from "./context/context";
import FormStateProvider from "./context/Providers/FormStateProvider";

export interface FormProps {
  style?: React.CSSProperties;
  name?: string;
  id?: string;
  className?: string;
  render?: (context: any) => React.ReactNode;
}

export interface FormState {}

class Form extends React.Component<FormProps, FormState> {
  state = { Name: { value: "", error: [] } };
  update = (key, value) => {
    this.setState({ [key]: value });
  };
  getContent = () => {
    if (this.props.render) {
      return this.props.render(this.state);
    }
    if (typeof this.props.children === "function") {
      return this.props.children(this.state);
    }
    return this.props.children;
  };
  render() {
    return (
      <form method="POST" {...this.props} noValidate>
        <FormStateContext.Provider
          value={{ ...this.state, update: this.update }}
        >
          {this.getContent()}
        </FormStateContext.Provider>
      </form>
    );
  }
}

export default Form;
