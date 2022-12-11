import Pagewrapper from "./components/wrapper/PageWrapper";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Pagewrapper />
      </AppProvider>
    </>
  );
}

export default App;
