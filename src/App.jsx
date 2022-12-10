import "./App.scss";
import Pagewrapper from "./components/Pagewrapper";
import { AppProvider } from "./Context/AppContext";
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
