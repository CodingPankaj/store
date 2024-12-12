import { useContext } from "react";
import { Title } from "../components/Title";
import { CategoryCheckboxFilter } from "./CategoryCheckboxFilter";
import { ShopContext } from "../pages/Shop";
import { MdClose } from "react-icons/md";
import { MainContext } from "../context/MainContext";

export const ShopFilter = () => {
  const { brands, category, setFilterCategory, setFilterBrand } =
    useContext(ShopContext);

  const { isFilterOpen, setIsFilterOpen } = useContext(MainContext);
  return (
    <div
      className={`nice fixed left-0 z-30 flex h-[85%] w-full flex-col rounded-t-[10px] bg-color-white transition-all duration-500 lg:sticky lg:top-10 lg:gap-5 lg:rounded-[10px] ${isFilterOpen ? "bottom-0" : "-bottom-[80%]"}`}
    >
      <div className="px-4 pt-5 lg:pt-2">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="absolute right-3 top-3 text-2xl"
        >
          <MdClose />
        </button>
        <Title title="Filter Product" />
      </div>
      <div className="flex grow flex-col overflow-y-scroll">
        <CategoryCheckboxFilter
          data={category}
          filterFunction={setFilterCategory}
          catTitle="Categories"
        />
        <CategoryCheckboxFilter
          data={brands}
          filterFunction={setFilterBrand}
          catTitle="Brands"
        />
      </div>
    </div>
  );
};
