import * as React from "react";
import styled from "styled-components";

import { Form, Input, Select, TextField, SubmitButton } from "./index";

export interface AppProps {}

const Wrapper = styled.div`
  margin: 10vh;
`;

const App: React.SFC<AppProps> = () => {
  const onChange = (e: React.ChangeEvent) => {
    console.log(e);
  };
  const onSelectChange = e => {
    console.log(e);
  };
  return (
    <Wrapper>
      <Form>
        <Input
          label="Test"
          onChange={onChange}
          error={true}
          required
          errorText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolorem. Odio laudantium molestias qui, error optio in, vel ea adipisci repellat harum debitis? Rerum laudantium ipsum doloremque soluta, quaerat molestiae non labore sequi nobis odio illo neque maiores voluptas ex mollitia voluptatem deleniti, repudiandae vero reprehenderit debitis autem. Commodi, mollitia?"
        />
        <Input
          label="Test"
          onChange={onChange}
          error={true}
          required
          errorText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolorem. Odio laudantium molestias qui, error optio in, vel ea adipisci repellat harum debitis? Rerum laudantium ipsum doloremque soluta, quaerat molestiae non labore sequi nobis odio illo neque maiores voluptas ex mollitia voluptatem deleniti, repudiandae vero reprehenderit debitis autem. Commodi, mollitia?"
        />
        <Select
          currentValue="Test"
          options={{ Test: "Test", Test1: "Test1" }}
          onChange={{ onSelectChange }}
        />
        <TextField onChange={onChange} />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default App;
