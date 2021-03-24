import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";

import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import { VirtuonProvider } from "./helpers/context/context";

ReactDOM.render(
  <VirtuonProvider>
    <App />
  </VirtuonProvider>,
  document.getElementById("root")
);

reportWebVitals();
