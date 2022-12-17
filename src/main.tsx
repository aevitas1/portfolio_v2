import React from "react";
import ReactDOM from "react-dom/client";
import "/fonts/coolvetica_condensed_rg.ttf";
import "/fonts/ClashDisplay-Variable.ttf";
import "/fonts/Inter-VariableFont_slnt_wght.ttf";
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
