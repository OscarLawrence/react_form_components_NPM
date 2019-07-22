import * as React from "react";

import { FormStateContext } from "../context";

export interface FormStateProviderProps {}

export interface FormStateProviderState {}

class FormStateProvider extends React.Component<
  FormStateProviderProps,
  FormStateProviderState
> {
  state = { Name: { value: "", error: [] } };
  update = (key, value) => {
    this.setState({ [key]: value });
  };
  render() {
    return (
      <FormStateContext.Provider value={{ ...this.state, update: this.update }}>
        {this.props.children}
      </FormStateContext.Provider>
    );
  }
}

export default FormStateProvider;
