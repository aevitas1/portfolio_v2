import React from "react";
import ReactDOM from "react-dom/client";
import "../public/fonts/coolvetica_condensed_rg.ttf";
import "../public/fonts/ClashDisplay-Variable.ttf";
import "../public/fonts/Inter-VariableFont_slnt_wght.ttf";
import "./styles/globals.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
