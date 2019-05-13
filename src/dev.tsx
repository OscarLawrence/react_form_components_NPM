import * as React from "react";
import App from "./App";
import * as ReactDom from "react-dom";

const element = document.getElementById("app");

const app = (
  <React.Fragment>
    <App />
  </React.Fragment>
);

ReactDom.render(app, element);
