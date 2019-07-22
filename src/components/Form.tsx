import * as React from "react";
import styled from "styled-components";

export interface FormProps {
  style?: React.CSSProperties;
  name?: string;
  id?: string;
  className?: string;
  render?: (state, setState) => React.ReactNode;
}

const Form: React.SFC<FormProps> = props => {
  const [state, setState] = React.useState("hello");

  const getContent = () => {
    if (props.render) {
      return props.render(state, setState);
    }
    if (typeof props.children === "function") {
      return props.children(state, setState);
    }
    return props.children;
  };
  return (
    <form method="POST" {...props} noValidate>
      {getContent()}
    </form>
  );
};

export default Form;
