import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        "https://wscubetech.co/ecommerce-api/products.php",
      );
      setProducts(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <MainContext.Provider value={{ products }}>{children}</MainContext.Provider>
  );
};
