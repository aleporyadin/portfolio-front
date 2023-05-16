import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./styles/colors.scss";
import "./styles/styles.scss";
import "./styles/components.scss";
import { reportWebVitals } from "./reportWebVitals";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
reportWebVitals();
