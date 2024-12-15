import { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { name, brand_name, price, image, rating, slug } = product;
  const [itemInWishlist, setItemInWishlist] = useState(false);
  return (
    <div className="flex flex-col gap-3 rounded-[10px] bg-color-white p-2 md:p-3">
      <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-color-grey-dark">
        <figure className="w-full">
          <img src={image} className="w-full object-cover" />
        </figure>
        <button
          onClick={() => setItemInWishlist(!itemInWishlist)}
          className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-color-white text-color-navy-blue"
        >
          {itemInWishlist ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </button>
        <span className="absolute left-2 top-2 flex h-6 items-center justify-center gap-1 rounded-full bg-color-white px-2 text-xs font-medium text-color-navy-blue">
          <GoStarFill className="text-sm text-color-orange" />
          {Number(rating).toFixed(1)}
        </span>
      </div>
      <div className="flex grow flex-col gap-1">
        <Link to={`/product/${slug}`}>
          <h3 className="line-clamp-2 text-base font-bold tracking-wide text-color-navy-blue">
            {name}
          </h3>
        </Link>
        <span className="mb-auto text-xs font-medium text-color-shadow-blue">
          {brand_name.length > 0 ? brand_name : "N/A"}
        </span>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-medium tracking-wide text-color-orange md:font-bold">
            ${Number(price).toLocaleString("en-IN")}
          </h3>
          <button className="mb-2 rounded-full bg-color-navy-blue px-4 py-1 text-color-white md:px-6 md:py-2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
