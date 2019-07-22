import * as React from "react";
import styled from "styled-components";

import { Form, Input, Select, TextField, SubmitButton } from "./index";

export interface AppProps {}

// style
const FormWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: start;
  grid-gap: 1em;
  margin-top: 2em;
`;

const App: React.SFC<AppProps> = () => {
  const validate = (value: string) => {
    const error = [];
    if (value.length < 5 && value.length != 0) {
      error.push("Field must be at least five characters");
    }
    return error;
  };
  const Submit = e => {
    e.preventDefault();
  };
  return (
    <Form>
      {context => {
        console.log(context);
        return (
          <React.Fragment>
            <Input
              label="Name"
              validate={validate}
              required
              highlightColor="green"
            />
          </React.Fragment>
        );
      }}
    </Form>
  );
};

export default App;
