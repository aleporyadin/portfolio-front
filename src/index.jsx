import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/colors.scss";
import "./styles/components.scss";
import "./styles/index.css";
import "./styles/styles.scss";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
