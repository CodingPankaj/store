import { useContext, useEffect, useRef, useState } from "react";
import { CategoryTitle } from "./CategoryTitle";
import { ShopContext } from "../context/ShopContext";

export const SortingFilter = ({ sortingFilter, setSortingFilter }) => {
  const { setSorting } = useContext(ShopContext);
  let [filter1, setFilter] = useState("");

  const handleSelect = (e) => {
    setSortingFilter(e.target.value);
    setFilter(e.target.value);
  };

  useEffect(() => {
    setSorting(sortingFilter);
  }, [sortingFilter]);

  return (
    <div className="hidden w-full flex-col py-1 lg:flex">
      <CategoryTitle title="Sort By" />

      <div className="w-full pb-3">
        <select
          name="sorting"
          value={sortingFilter === filter1 ? sortingFilter : ""}
          onChange={handleSelect}
          className="w-full border border-color-shadow-blue/50 px-2 py-2 text-sm font-medium text-color-navy-blue outline-none"
        >
          <option value="">Default</option>
          <option value="1">Name ASC</option>
          <option value="2">Name DESC</option>
          <option value="3">Price ASC</option>
          <option value="4">Price DESC</option>
          <option value="5">Discounted Price ASC</option>
          <option value="6">Discounted Price DESC</option>
          <option value="7">Rating Low to High</option>
          <option value="8">Rating High to Low</option>
        </select>
      </div>
    </div>
  );
};
