import React, { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext<any>({});

export const ContextWrapper = ({ children }) => {
  const [isPemilik, setIsPemilik] = useState(false);
  const [userData, setUserData] = useState({});
  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        isPemilik,
        setIsPemilik,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
