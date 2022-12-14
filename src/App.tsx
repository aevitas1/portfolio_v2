import Pagewrapper from "./components/wrapper/PageWrapper";
import { AppProvider } from "./context/AppContext";

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

  return (
    <>
      <AppProvider>
        <Pagewrapper />
      </AppProvider>
    </>
  );
}

export default App;
