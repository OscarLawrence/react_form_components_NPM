import * as React from "react";
import styled from "styled-components";

export interface FormProps {
  style?: React.CSSProperties;
  name?: string;
  id?: string;
  className?: string;
}

const Form: React.SFC<FormProps> = props => {
  return (
    <form method="POST" {...props} noValidate>
      {props.children}
    </form>
  );
};

export default Form;
