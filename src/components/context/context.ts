import * as React from "react";

export const FormStateContext = React.createContext({
  FormState: {},
  update: (key, value) => {}
});
