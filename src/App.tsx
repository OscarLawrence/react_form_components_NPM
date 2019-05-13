import * as React from "react";

import { Form, Input, Select, TextField, SubmitButton } from "./index";
import console = require("console");

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  const onChange = (e: React.MouseEvent) => {
    console.log(e);
  };
  return (
    <div>
      <Form>
        <Input label="Test" onChange={onChange} />
        <Select
          currentValue="Test"
          options={{ Test: "Test", Test1: "Test1" }}
          onChange={{ onChange }}
        />
        <TextField onChange={onChange} />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </div>
  );
};

export default App;
