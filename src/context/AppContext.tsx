import { createContext, useState } from "react";

interface AppContextInterface {
  children: React.ReactNode;
}

export const AppContext = createContext({
  openMobile: false,
  setOpenMobile: (openMobile: boolean) => {},
  currentPage: 1,
  setCurrentPage: (currentPage: number) => {},
});

export const AppProvider = ({ children }: AppContextInterface) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <AppContext.Provider
      value={{
        openMobile,
        setOpenMobile,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
