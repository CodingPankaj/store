import { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import { ShopFilter } from "../shopComponents/ShopFilter";
import { IoFilter } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";
import { Title } from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { MainContext } from "../context/MainContext";
import { Breadcrumb } from "../components/Breadcrumb";

export const Shop = () => {
  const { products } = useContext(ShopContext);
  const { toggleFilter } = useContext(MainContext);
  return (
    <main className="bg-color-grey-light">
      <Breadcrumb />
      <section className="px-4 py-2 md:px-6 md:py-3">
        <Title
          title="All Products"
          customStyle="text-center py-2 lg:py-5 mb-2 lg:mb-6"
        />
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-[300px_1fr]">
          <div className="w-full">
            <ShopFilter />
          </div>

          <div className="w-full">
            <div className="top-[80px] grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:sticky lg:grid-cols-4">
              {products && products.length >= 1
                ? products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </section>

      <section className="sticky bottom-0 rounded-tl-xl border border-color-navy-blue/50 bg-color-white lg:hidden">
        <div className="flex">
          <button
            onClick={toggleFilter}
            className="flex w-2/4 items-center justify-center gap-2 border-r border-color-navy-blue/50 px-5 py-2 text-color-navy-blue"
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
  );
};
