import { useEffect, useState } from "react";
import { CategoryTitle } from "./CategoryTitle";
import { MdKeyboardArrowRight } from "react-icons/md";

export const CategoryCheckboxFilter = ({
  data,
  filterFunction,
  catTitle,
  applyFilter,
  setApplyFilter,
}) => {
  const [filterAccordion, setFilterAccordion] = useState(false);

  useEffect(() => {
    filterFunction(applyFilter.join(","));
    console.log(applyFilter);
  }, [applyFilter]);

  return (
    <div className="border-color-shadow-blue/60 flex w-full flex-col border-b">
      <button
        onClick={() => setFilterAccordion(!filterAccordion)}
        className="flex w-full items-center justify-between"
      >
        <CategoryTitle title={catTitle} />
        <MdKeyboardArrowRight
          className={`text-2xl transition-all duration-200 ${filterAccordion ? "rotate-90" : ""}`}
        />
      </button>
      <div
        className={`grid ${filterAccordion ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-500`}
      >
        <div className="row-span-2 overflow-hidden">
          <ul className="py-2 text-sm font-medium">
            {data && data.length >= 1
              ? data.map((item) => (
                  <CheckboxFilterItem
                    key={item.id}
                    item={item}
                    applyFilter={applyFilter}
                    setApplyFilter={setApplyFilter}
                  />
                ))
              : "Loading Brand"}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CheckboxFilterItem = ({ item, setApplyFilter, applyFilter }) => {
  const { id, name, slug } = item;

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setApplyFilter((prev) => [...prev, value]);
    } else {
      setApplyFilter(() => applyFilter.filter((item) => item !== value));
    }
  };

  return (
    <li className="py-2 text-color-navy-blue">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          value={slug}
          onChange={handleChange}
          checked={applyFilter.includes(slug)}
          className="relative size-4 appearance-none before:absolute before:left-0 before:top-0 before:size-4 before:rounded before:border before:border-color-shadow-blue checked:before:border-color-green checked:before:bg-color-green"
        />
        <span>{name}</span>
      </label>
    </li>
  );
};
