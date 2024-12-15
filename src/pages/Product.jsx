import { useContext } from "react";
import { ProductDetails } from "../productComponents/ProductDetails";
import { ProductImage } from "../productComponents/ProductImage";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";

export const Product = () => {
  const { products } = useContext(ShopContext);
  const { productUrlId } = useParams();
  const product = products.filter(
    (item, index) => item.slug === productUrlId,
  )[0];

  return (
    <main className="bg-color-grey-light">
      <Breadcrumb />
      {product !== undefined ? (
        <section className="px-4 py-2 md:px-6 md:py-3">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-12">
            <ProductImage product={product} />
            <ProductDetails product={product} />
          </div>
        </section>
      ) : (
        ""
      )}
    </main>
  );
};
