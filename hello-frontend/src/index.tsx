import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import "./index.css";

// Renders the app; this is usually not tested
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);