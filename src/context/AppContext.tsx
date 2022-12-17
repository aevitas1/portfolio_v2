import { createContext, useState } from "react";

interface AppContextInterface {
  children: React.ReactNode;
}

export const AppContext = createContext({
  openMobile: false,
  setOpenMobile: (openMobile: boolean) => {},
  toggleScheme: false,
  setToggleScheme: (toggleScheme: boolean) => {},
});

export const AppProvider = ({ children }: AppContextInterface) => {
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
