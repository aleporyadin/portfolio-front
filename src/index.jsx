import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/colors.scss";
import "./styles/components.scss";
import "./styles/index.css";
import "./styles/styles.scss";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <App/>
);
