import * as React from "react";

export interface FormProps {
  style?: React.CSSProperties;
}

const Form: React.SFC<FormProps> = props => {
  return (
    <form style={{ ...props.style }} noValidate {...props}>
      {props.children}
    </form>
  );
};

export default Form;
