import { createContext, useContext, useEffect, useState } from "react";

const myContext = createContext();

export function MyContextProvider({ children }) {
  const [userData, setUserData] = useState();

  return (
    <myContext.Provider value={{ userData, setUserData }}>
      {children}
    </myContext.Provider>
  );
}

export const useUserData = () => useContext(myContext);
