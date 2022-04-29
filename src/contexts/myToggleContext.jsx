import { createContext, useContext, useEffect, useState } from "react";

const myToggleContext = createContext();

export function MyToggleContextProvider({ children }) {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);

  return (
    <myToggleContext.Provider value={{ on, toggle }}>
      {children}
    </myToggleContext.Provider>
  );
}

export const useToggle = () => useContext(myToggleContext);
