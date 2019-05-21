import * as React from "react";
import styled from "styled-components";

import { Form, Input, Select, TextField, SubmitButton } from "./index";

import { InputType } from "zlib";

export interface AppProps {}

const Wrapper = styled.div`
  margin: 10vh;
`;

const App: React.SFC<AppProps> = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
    console.log(error);
    return error.length === 0 ? true : error;
  };
  return (
    <Wrapper>
      <Form>
        <InputWrapper>
          <Input
            label="Test"
            width="40%"
            required
            validationFunction={validate}
            errorText={{
              length: "the Input must have at least 5 characters",
              uppercase: "need to include uppercase"
            }}
          />
        </InputWrapper>
        <Select
          currentValue="Test"
          options={{ Test: "Test", Test1: "Test1" }}
          onChange={onSelectChange}
        />
        <TextField onChange={onChange} placeholder="your text" height="20em" />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default App;
