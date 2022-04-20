import Inspect from "inspx";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./pages/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Inspect>
        <App />
      </Inspect>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
