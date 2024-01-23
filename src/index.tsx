import React from "react";
import App from "./App";
import store from "./store";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
