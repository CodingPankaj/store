import { useEffect, useState } from "react";
import { CategoryTitle } from "./CategoryTitle";

export const RangeFilter = ({
  setFilterFrom,
  setFilterTo,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  title,
}) => {
  useEffect(() => {
    setFilterFrom(minPrice);
    setFilterTo(maxPrice);
  }, [maxPrice, minPrice]);
  return (
    <div className="border-color-shadow-blue/60 flex w-full flex-col border-b py-1">
      <CategoryTitle title={title} />

      <div className="pb-2">
        <input type="range" className="range-filter" />
      </div>
      <div className="grid w-full grid-cols-[1fr_auto_1fr] gap-5 pb-3">
        <label className="flex items-center gap-3">
          <span>Min</span>
          <input
            type="text"
            placeholder="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border-color-shadow-blue/50 w-full border px-1 py-1 text-sm text-color-navy-blue placeholder:text-center placeholder:text-sm"
          />
        </label>
        <span className="text-xl font-medium">-</span>
        <label className="flex items-center gap-3">
          <span>Max</span>
          <input
            type="text"
            placeholder="100000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border-color-shadow-blue/50 w-full border px-1 py-1 text-sm text-color-navy-blue placeholder:text-center placeholder:text-sm"
          />
        </label>
      </div>
    </div>
  );
};
