import { createContext, useState } from "react";

interface AppContextInterface {
  children: React.ReactNode;
}

export const AppContext = createContext({
  openMobile: false,
  setOpenMobile: (openMobile: boolean) => {},
});

export const AppProvider = ({ children }: AppContextInterface) => {
  const [openMobile, setOpenMobile] = useState(false);
  console.log(openMobile);
  return (
    <AppContext.Provider
      value={{
        openMobile,
        setOpenMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
