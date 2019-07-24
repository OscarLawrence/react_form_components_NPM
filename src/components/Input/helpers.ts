import { Colors } from "../../styles";

export const getError = (State, props) => {
  return State.FormState[props.name] ? State.FormState[props.name].error : [];
};

export const hasError = (State, props) => {
  return getError(State, props).length > 0;
};

export const getLabelColor = (State, Focus, Empty, props) => {
  if (hasError(State, props)) {
    return props.errorColor || Colors.error;
  }
  if (Focus) {
    return props.highlightColor || Colors.highlight;
  }
  if (Empty) {
    return props.labelColor || Colors.label;
  }
  return props.subtleColor || Colors.subtle;
};
