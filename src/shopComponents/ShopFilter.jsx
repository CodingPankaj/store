import { useContext, useState } from "react";
import { Title } from "../components/Title";
import { CategoryCheckboxFilter } from "./CategoryCheckboxFilter";
import { ShopContext } from "../pages/Shop";
import { MdClose } from "react-icons/md";
import { MainContext } from "../context/MainContext";
import { ResetFilter } from "./ReserFilter";

export const ShopFilter = () => {
  const { brands, category, setFilterCategory, setFilterBrand } =
    useContext(ShopContext);
  const { isFilterOpen, toggleFilter } = useContext(MainContext);
  const [applyCategoryFilter, setApplyCategoryFilter] = useState([]);
  const [applyBrandFilter, setApplyBrandFilter] = useState([]);

  const resetFilter = () => {
    setFilterCategory("");
    setFilterBrand("");
    setApplyCategoryFilter([]);
    setApplyBrandFilter([]);
  };
  return (
    <div
      className={`fixed left-0 z-20 flex h-[85%] w-full flex-col rounded-t-[10px] bg-color-white px-4 py-5 transition-all duration-500 lg:sticky lg:top-[80px] lg:z-0 lg:h-auto lg:gap-3 lg:rounded-[10px] ${isFilterOpen ? "bottom-0" : "-bottom-full"}`}
    >
      <button
        onClick={toggleFilter}
        className="absolute right-3 top-3 text-2xl lg:hidden"
      >
        <MdClose />
      </button>
      <Title title="Filter Product" />

      <div className="scrollbar-hidden flex grow flex-col overflow-y-scroll">
        <CategoryCheckboxFilter
          data={category}
          filterFunction={setFilterCategory}
          applyFilter={applyCategoryFilter}
          setApplyFilter={setApplyCategoryFilter}
          catTitle="Categories"
        />
        <CategoryCheckboxFilter
          data={brands}
          filterFunction={setFilterBrand}
          applyFilter={applyBrandFilter}
          setApplyFilter={setApplyBrandFilter}
          catTitle="Brands"
        />
      </div>

      <ResetFilter resetFilter={resetFilter} />
    </div>
  );
};
