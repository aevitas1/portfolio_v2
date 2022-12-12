import { createContext, useState } from "react";

interface AppContextInterface {
  children: React.ReactNode;
}

export const AppContext = createContext({
  openMobile: false,
  setOpenMobile: (openMobile: boolean) => {},
  pagination: 1,
  setPagination: (pagination: number) => {},
});

export const AppProvider = ({ children }: AppContextInterface) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [pagination, setPagination] = useState(1);

  console.log(openMobile);
  return (
    <AppContext.Provider
      value={{
        openMobile,
        setOpenMobile,
        pagination,
        setPagination,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
