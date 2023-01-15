import { useContext } from "react";
import { AppProvider } from "./context/AppContext";
import { AppContext } from "./context/AppContext";
import ContentBlock from "./components/content/contentblock/ContentBlock";
import NavBlock from "./components/navigation/navblock/NavBlock";

import "./styles/globals.scss";
import "/fonts/coolvetica_condensed_rg.ttf";
import "/fonts/ClashDisplay-Variable.ttf";
import "/fonts/Inter-VariableFont_slnt_wght.ttf";

function App() {
  // Mobile 100vh fix to avoid vertical scrollbar
  const calculateVh = () => {
    let vh = window.innerHeight;
    // Set this as a variable
    document.documentElement.style.setProperty("--vh", vh + "px");
  };

  // Initial calc
  calculateVh();

  // Recalculate on resize
  window.addEventListener("resize", calculateVh);

  // Recalculate on device orientation change
  window.addEventListener("orientationchange", calculateVh);
  const { toggleScheme } = useContext(AppContext);

  return (
    <>
      <AppProvider>
        <div className={toggleScheme ? "pagewrapper dark" : "pagewrapper"}>
          <main className={"inner_wrapper"}>
            <ContentBlock />
            <NavBlock />
          </main>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
