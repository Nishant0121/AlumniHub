import { createContext, useContext, useEffect, useState } from "react";

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
  const [authUser, setAuthUser] = useState(localStorage.getItem("user"));
  const [token, setToken] = useState(null);

  useEffect(() => {
    setAuthUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <AppContext.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
        isOpenProfile,
        setisOpenProfile,
        activeLink,
        setActiveLink,
        authUser,
        setAuthUser,
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
