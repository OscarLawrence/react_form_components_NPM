import * as React from "react";

export const FormStateContext = React.createContext({
  update: (key, value) => {}
});
