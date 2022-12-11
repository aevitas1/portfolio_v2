import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts/coolvetica condensed rg.ttf";
import "./fonts/ClashDisplay-Variable.ttf";
import "./fonts/Inter-VariableFont_slnt,wght.ttf";
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
