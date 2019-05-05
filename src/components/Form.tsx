import * as React from "react";

export interface FormProps {}

const Form: React.SFC<FormProps> = props => {
  return (
    <form style={{ display: "block" }} noValidate {...props}>
      {props.children}
    </form>
  );
};

export default Form;
