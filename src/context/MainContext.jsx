import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <MainContext.Provider value={{ overlay, isFilterOpen, setIsFilterOpen }}>
      {children}
    </MainContext.Provider>
  );
};
