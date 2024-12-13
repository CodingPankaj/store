import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setOverlay(!overlay);
  };
  return (
    <MainContext.Provider
      value={{ overlay, isFilterOpen, toggleFilter, setWishlist }}
    >
      {children}
    </MainContext.Provider>
  );
};
