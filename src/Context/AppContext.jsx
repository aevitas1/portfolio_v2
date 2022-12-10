import { useState, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Mobile Toggle
  const [openMobile, setOpenMobile] = useState(false);
  const removeBackground = () => {
    document.body.classList.remove("mobile_inactive");
  };
  const toggleMobile = () => {
    if (openMobile) {
      setOpenMobile(false);
      document.body.classList.remove("mobile_active");
      document.body.classList.add("mobile_inactive");
      setTimeout(removeBackground, 400);
    } else {
      setOpenMobile(true);
      document.body.classList.remove("mobile_inactive");
      document.body.classList.add("mobile_active");
    }
  };

  return (
    <AppContext.Provider
      value={{
        openMobile,
        setOpenMobile,
        toggleMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
