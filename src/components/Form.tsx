import * as React from "react";

export interface FormProps {
  style?: React.CSSProperties;
  name?: string;
  id?: string;
  className?: string;
}

const Form: React.SFC<FormProps> = props => {
  return (
    <form {...props} noValidate>
      {props.children}
    </form>
  );
};

export default Form;
