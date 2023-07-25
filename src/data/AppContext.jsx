import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [toggleScheme, setToggleScheme] = useState(false);

  return (
    <AppContext.Provider
      value={{
        openMobile,
        setOpenMobile,
        toggleScheme,
        setToggleScheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
