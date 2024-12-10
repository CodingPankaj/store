import { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import { ShopFilter } from "../shopComponents/ShopFilter";

import { MainContext } from "../context/MainContext";

export const Shop = () => {
  const { products } = useContext(MainContext);

  return (
    <section className="bg-color-grey-light px-4 py-2 md:px-6 md:py-3">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[290px_1fr] gap-5">
        <div>
          <ShopFilter />
        </div>

        <div>
          <div className="grid grid-cols-4 gap-5">
            {products && products.length >= 1
              ? products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </section>
  );
};
