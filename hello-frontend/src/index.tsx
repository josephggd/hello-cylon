import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main/App";
import "./index.css";

// Renders the app; this is usually not tested
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);