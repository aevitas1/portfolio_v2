import Pagewrapper from "./components/Pagewrapper";
import { AppProvider } from "./Context/AppContext";
import "./SCSS/styles";
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
