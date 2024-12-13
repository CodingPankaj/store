import { createContext, useContext, useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { ShopFilter } from "../shopComponents/ShopFilter";
import axios from "axios";
import { MainContext } from "../context/MainContext";
import { IoFilter } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";

export const ShopContext = createContext();

export const Shop = () => {
  const productApiUrl = "https://wscubetech.co/ecommerce-api/products.php";
  const categoryApiUrl = "https://wscubetech.co/ecommerce-api/categories.php";
  const brandApiUrl = "https://wscubetech.co/ecommerce-api/brands.php";
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const { toggleFilter } = useContext(MainContext);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(productApiUrl, {
        params: {
          page: 1,
          limit: 12,
          categories: filterCategory,
          brands: filterBrand,
          price_from: "",
          price_to: "",
          discount_from: "",
          discount_to: "",
          rating: null,
          sorting: null,
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
  }, [filterCategory, filterBrand]);

  return (
    <ShopContext.Provider
      value={{
        brands,
        category,
        setFilterCategory,
        setFilterBrand,
      }}
    >
      <main>
        <section className="bg-color-grey-light px-4 py-2 md:px-6 md:py-3">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-[300px_1fr]">
            <div className="w-full">
              <ShopFilter />
            </div>

            <div className="w-full">
              {/* <div className="top-[80px] grid grid-cols-2 gap-2 md:grid-cols-3 lg:sticky lg:grid-cols-4 lg:gap-5"> */}
              <div className="top-[80px] grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-2 lg:sticky lg:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] lg:gap-5">
                {products && products.length >= 1
                  ? products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  : "Loading..."}
              </div>
            </div>
          </div>
        </section>

        <section className="sticky bottom-0 rounded-tl-xl border bg-color-white lg:hidden">
          <div className="flex">
            <button
              onClick={toggleFilter}
              className="flex w-2/4 items-center justify-center gap-2 px-5 py-2 text-color-navy-blue"
            >
              <IoFilter className="text-sm" />
              Filter
            </button>
            <button
              onClick={toggleFilter}
              className="flex w-2/4 items-center justify-center gap-2 px-5 py-2 text-color-navy-blue"
            >
              <FaSortAmountDown className="text-sm" />
              Sort by
            </button>
          </div>
        </section>
      </main>
    </ShopContext.Provider>
  );
};
