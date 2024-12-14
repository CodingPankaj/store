import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const productApiUrl = "https://wscubetech.co/ecommerce-api/products.php";
  const categoryApiUrl = "https://wscubetech.co/ecommerce-api/categories.php";
  const brandApiUrl = "https://wscubetech.co/ecommerce-api/brands.php";
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [sorting, setSorting] = useState(null);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(productApiUrl, {
        params: {
          page: 1,
          limit: 12,
          categories: filterCategory,
          brands: filterBrand,
          price_from: priceFrom,
          price_to: priceTo,
          discount_from: "",
          discount_to: "",
          rating: null,
          sorting: sorting,
        },
      });
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilterData = async (ApiUrl, updateFunction) => {
    try {
      const res = await axios.get(ApiUrl);
      updateFunction(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData(categoryApiUrl, setCategory);
    getFilterData(brandApiUrl, setBrands);
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [filterCategory, filterBrand, sorting, priceTo, priceFrom]);

  return (
    <ShopContext.Provider
      value={{
        products,
        brands,
        category,
        setFilterCategory,
        setFilterBrand,
        setSorting,
        setPriceTo,
        setPriceFrom,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
