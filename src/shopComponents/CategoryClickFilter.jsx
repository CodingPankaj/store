import { CategoryTitle } from "./CategoryTitle";

export const CategoryClickFilter = () => {
  return (
    <div className="bg-color-white">
      <CategoryTitle />
      <ul className="py-2 text-sm font-medium">
        <ClickFilterItem />
        <li className="px-4 py-2 text-color-shadow-blue">Smartphone</li>
        <li className="px-4 py-2 text-color-shadow-blue">Smartphone</li>
        <li className="px-4 py-2 text-color-shadow-blue">Smartphone</li>
        <li className="px-4 py-2 text-color-shadow-blue">Smartphone</li>
        <li className="px-4 py-2 text-color-shadow-blue">Smartphone</li>
        <li className="px-4 py-2 text-color-shadow-blue">Smartphone</li>
        <li className="px-4 py-2 text-color-shadow-blue">Smartphone</li>
      </ul>
    </div>
  );
};

const ClickFilterItem = () => {
  return (
    <li className="px-4 py-2 text-color-navy-blue">
      <button>All Product</button>
    </li>
  );
};
