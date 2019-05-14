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
  return (
    <Wrapper>
      <Form>
        <InputWrapper>
          <Input
            label="Test"
            width="40%"
            onChange={onChange}
            error={true}
            required
            errorText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolorem. Odio laudantium molestias qui, error optio in, vel ea adipisci repellat harum debitis? Rerum laudantium ipsum doloremque soluta, quaerat molestiae non labore sequi nobis odio illo neque maiores voluptas ex mollitia voluptatem deleniti, repudiandae vero reprehenderit debitis autem. Commodi, mollitia?"
          />
          <Input
            label="Test"
            width="40%"
            onChange={onChange}
            error={true}
            required
            errorText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolorem. Odio laudantium molestias qui, error optio in, vel ea adipisci repellat harum debitis? Rerum laudantium ipsum doloremque soluta, quaerat molestiae non labore sequi nobis odio illo neque maiores voluptas ex mollitia voluptatem deleniti, repudiandae vero reprehenderit debitis autem. Commodi, mollitia?"
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
