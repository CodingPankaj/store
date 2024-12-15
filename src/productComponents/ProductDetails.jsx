import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { IoMdHeart, IoMdHeartEmpty, IoMdShare } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";

export const ProductDetails = ({ product }) => {
  console.log(product);
  const {
    description,
    rating,
    category_name,
    price,
    name,
    discount_percentage,
    id,
    stock,
  } = product;

  const [itemQty, setItemQty] = useState(1);
  return (
    <div>
      {product !== undefined ? (
        <div>
          <div className="flex flex-col gap-4 border-b border-color-shadow-blue py-4">
            <h1 className="text-4xl font-bold tracking-wide text-color-navy-blue">
              {name}
            </h1>
            <div className="flex items-center gap-2">
              <h3 className="text-3xl font-bold tracking-wide text-color-green">
                ₹{Number(price).toFixed(2).toLocaleString("en-IN")}
              </h3>
              <h3 className="text-2xl font-bold tracking-wide text-color-shadow-blue line-through">
                ₹
                {Number(Number(price) * (1 + Number(discount_percentage) / 100))
                  .toFixed(2)
                  .toLocaleString("en-IN")}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 items-center justify-center gap-1 rounded-full bg-color-white px-3 text-xs font-medium text-color-navy-blue">
                <GoStarFill className="text-sm text-color-orange" />
                {Number(rating).toFixed(1)}
              </span>
              <span className="text-xs font-medium text-color-shadow-blue">
                {rating} reviews
              </span>
            </div>
            <p className="line-clamp-2 text-color-shadow-blue">{description}</p>
          </div>
          <div className="border-b border-color-shadow-blue py-4">
            <ul>
              <li className="flex items-center">
                <p className="w-[100px] font-bold tracking-wide text-color-navy-blue">
                  SKU:
                </p>
                <span className="font-medium text-color-shadow-blue">
                  PRO{id}
                </span>
              </li>
              <li className="flex items-center">
                <p className="w-[100px] font-bold tracking-wide text-color-navy-blue">
                  Category:
                </p>
                <span className="font-medium text-color-shadow-blue">
                  {category_name}
                </span>
              </li>
              <li className="flex items-center">
                <p className="w-[100px] font-bold tracking-wide text-color-navy-blue">
                  Stock:
                </p>
                <span className="font-medium text-color-shadow-blue">
                  {stock}
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 border-b border-color-shadow-blue py-4">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold tracking-wide text-color-navy-blue">
                Quantity:
              </h4>
              <div className="flex gap-5">
                <div className="flex gap-2">
                  <button className="flex size-[40px] items-center justify-center rounded-full bg-color-navy-blue">
                    <FaMinus className="text-color-white" />
                  </button>
                  <input
                    type="text"
                    value={itemQty}
                    onChange={(e) => console.log("hello")}
                    className="flex h-[40px] w-[100px] items-center rounded-full border border-color-shadow-blue text-center font-medium text-color-navy-blue outline-none"
                  />
                  <button className="flex size-[40px] items-center justify-center rounded-full bg-color-navy-blue">
                    <FaPlus className="text-color-white" />
                  </button>
                </div>
                <h4 className="flex items-center gap-2 font-medium text-color-shadow-blue">
                  Total:
                  <span className="text-2xl font-bold text-color-navy-blue">
                    ₹{Number(price).toFixed(2).toLocaleString("en-IN")}
                  </span>
                </h4>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold tracking-wide text-color-navy-blue">
                Shipping:
              </h4>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <IoChevronDownSharp className="pointer-events-none absolute right-3 top-2/4 z-10 -translate-y-2/4 text-color-navy-blue" />
                  <select
                    name="shipping"
                    className="relative flex h-[40px] min-w-fit appearance-none items-center rounded-full border border-color-shadow-blue pl-5 pr-10 text-center font-medium text-color-navy-blue outline-none"
                  >
                    <option value="normal-delivery text-left">
                      Normal Delivery
                    </option>
                    <option value="normal-delivery text-left">
                      Fast Deliver
                    </option>
                    <option value="normal-delivery text-left">
                      Express Delivery
                    </option>
                  </select>
                </div>
                <div className="relative">
                  <IoChevronDownSharp className="pointer-events-none absolute right-3 top-2/4 z-10 -translate-y-2/4 text-color-navy-blue" />
                  <select
                    name="shipping"
                    className="relative flex h-[40px] min-w-fit appearance-none items-center rounded-full border border-color-shadow-blue pl-5 pr-10 text-center font-medium text-color-navy-blue outline-none"
                  >
                    <option value="normal-delivery text-left">
                      Select Address
                    </option>
                    <option value="normal-delivery text-left">
                      Fast Deliver
                    </option>
                    <option value="normal-delivery text-left">
                      Express Delivery
                    </option>
                  </select>
                </div>
              </div>
              <p className="line-clamp-2 text-color-shadow-blue">
                Estimation 3-5 days delivery ( ₹49 - ₹149 estimated shipping
                cost )
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-4 py-4">
            <button className="flex size-[40px] items-center justify-center rounded-full bg-color-white text-color-navy-blue">
              <IoMdHeartEmpty className="text-2xl" />
            </button>
            <button className="flex size-[40px] items-center justify-center rounded-full bg-color-white text-color-navy-blue">
              <IoMdShare className="text-2xl" />
            </button>
            <button className="flex h-[40px] items-center justify-center rounded-full border border-color-navy-blue px-6 text-lg font-medium text-color-navy-blue">
              Add to Cart
            </button>
            <button className="flex h-[40px] items-center justify-center rounded-full border border-color-navy-blue bg-color-navy-blue px-6 text-lg font-medium text-color-white">
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
