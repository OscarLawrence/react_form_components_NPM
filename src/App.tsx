import * as React from "react";
import styled from "styled-components";

import { Form, Input, Select, TextField, SubmitButton } from "./index";

export interface AppProps {}

const Wrapper = styled.div`
  margin: 10vh;
`;

const App: React.SFC<AppProps> = () => {
  const [State, setState] = React.useState({ value1: "" });
  const onChange = e => {
    setState(
      Object.defineProperty(State, "value1", {
        enumerable: true,
        writable: false,
        configurable: true,
        value: e.target.value
      })
    );
  };
  const onSelectChange = (e: React.FormEvent<HTMLDivElement>) => {
    console.log(e);
  };
  const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  const validate = (value: string) => {
    let error = [];
    if (value.length < 5) {
      error.push("length");
    }
    if (/.*[A-Z]/.test(value)) {
      error.push("uppercase");
    }
    return error.length === 0 ? true : error;
  };
  const change = value => {
    console.log(value);
  };
  return (
    <Wrapper>
      <Form>
        <InputWrapper>
          <Input
            label="Test"
            required
            errors={{ length: "too short", uppercase: "no Uppercase!!!" }}
            validationFunction={validate}
          />
        </InputWrapper>
        <Select
          currentValue="Test"
          options={{ Test: "Test", Test1: "Test1" }}
          onChange={onSelectChange}
        />
        <TextField placeholder="your text" height="20em" onChange={change} />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default App;
