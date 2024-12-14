import { useEffect } from "react";
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
  const min = 0;
  const max = 50000;
  const gap = 1000;
  const minPercentage = (minPrice / max) * 100;
  const maxPercentage = (maxPrice / max) * 100;

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin + gap <= maxPrice) {
      setMinPrice(newMin);
    }
  };
  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax - gap >= minPrice) {
      setMaxPrice(newMax);
    }
  };

  useEffect(() => {
    setFilterFrom(minPrice);
    setFilterTo(maxPrice);
  }, [maxPrice, minPrice]);

  return (
    <div className="flex w-full flex-col border-b border-color-shadow-blue/60 py-1">
      <CategoryTitle title={title} />

      <div className="relative pb-2">
        <div
          className="absolute bottom-0 top-0 h-[6px] w-full rounded-full"
          style={{
            background: `linear-gradient(to right, #b6bbc4 ${minPercentage}% , #ee9322 ${minPercentage}%, #ee9322 ${maxPercentage}%, #b6bbc4 ${maxPercentage}%)`,
          }}
        ></div>
        <input
          type="range"
          value={minPrice}
          min={min}
          max={max}
          onChange={handleMinChange}
          className="range-input"
        />
        <input
          type="range"
          value={maxPrice}
          min={min}
          max={max}
          onChange={handleMaxChange}
          className="range-input"
        />
      </div>
      <div className="grid w-full grid-cols-[1fr_auto_1fr] gap-5 py-5">
        <label className="flex items-center gap-3">
          <span>Min</span>
          <input
            type="text"
            placeholder="0"
            value={minPrice}
            onChange={handleMinChange}
            className="w-full border border-color-shadow-blue/50 px-3 py-1 text-sm text-color-navy-blue placeholder:text-center placeholder:text-sm"
          />
        </label>
        <span className="text-xl font-medium">-</span>
        <label className="flex items-center gap-3">
          <span>Max</span>
          <input
            type="text"
            placeholder="100000"
            value={maxPrice}
            onChange={handleMaxChange}
            className="w-full border border-color-shadow-blue/50 px-3 py-1 text-sm text-color-navy-blue placeholder:text-center placeholder:text-sm"
          />
        </label>
      </div>
    </div>
  );
};
