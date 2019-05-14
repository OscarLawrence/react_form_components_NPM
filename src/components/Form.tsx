import * as React from "react";
import styled from "styled-components";

export interface FormProps {
  style?: React.CSSProperties;
  name?: string;
  id?: string;
  className?: string;
}

const Form: React.SFC<FormProps> = props => {
  const FormStyle = styled.form``;
  return (
    <FormStyle {...props} noValidate>
      {props.children}
    </FormStyle>
  );
};

export default Form;
