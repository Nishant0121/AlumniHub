import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenProfile, setisOpenProfile] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  return (
    <AppContext.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
        isOpenProfile,
        setisOpenProfile,
        activeLink,
        setActiveLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
