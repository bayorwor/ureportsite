import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/bootstrap.min.css";
import "aos/dist/aos.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
