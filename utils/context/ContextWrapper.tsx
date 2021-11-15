import React, { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext<any>({});

export const ContextWrapper = ({ children }) => {
  const [isPemilik, setIsPemilik] = useState(false);
  const [studentClass, setStudentClass] = useState("");
  const [userData, setUserData] = useState({});
  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        isPemilik,
        setIsPemilik,
        studentClass,
        setStudentClass,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
