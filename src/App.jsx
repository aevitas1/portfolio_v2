import { useContext } from "react";
import AppContext from "./data/AppContext";
import ContentBlock from "./components/content/contentblock/ContentBlock";
import NavBlock from "./components/navigation/navblock/NavBlock";

import "./styles/globals.scss";
import "/fonts/coolvetica_condensed_rg.ttf";
import "/fonts/ClashDisplay-Variable.ttf";
import "/fonts/Inter-VariableFont_slnt_wght.ttf";

function App() {
  const { toggleScheme } = useContext(AppContext);

  const calculateVh = () => {
    const vh = window.innerHeight;

    // Set this as a variable
    document.documentElement.style.setProperty("--vh", vh + "px");
  };

  calculateVh();

  // Recalculate on resize
  window.addEventListener("resize", calculateVh);

  // Recalculate on device orientation change
  window.addEventListener("orientationchange", calculateVh);

  return (
    <div className={toggleScheme ? "pagewrapper dark" : "pagewrapper"}>
      <main className="inner_wrapper">
        <ContentBlock />
        <NavBlock />
      </main>
    </div>
  );
}

export default App;
