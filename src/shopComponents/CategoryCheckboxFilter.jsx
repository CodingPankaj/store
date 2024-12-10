import { useEffect, useState } from "react";
import { CategoryTitle } from "./CategoryTitle";
import axios from "axios";

export const CategoryCheckboxFilter = () => {
  const [brands, setBrands] = useState([]);

  const getAllBrands = async () => {
    try {
      const res = await axios.get(
        "https://wscubetech.co/ecommerce-api/categories.php",
      );
      setBrands(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <div>
      <CategoryTitle title="Brand" />
      <ul className="py-2 text-sm font-medium">
        {brands && brands.length >= 1
          ? brands.map((brand) => (
              <CheckboxFilterItem key={brand.id} brand={brand} />
            ))
          : "Loading Brand"}
      </ul>
    </div>
  );
};

const CheckboxFilterItem = ({ brand }) => {
  const { id, name, slug } = brand;
  return (
    <li className="px-4 py-2 text-color-navy-blue">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          value={id}
          className="relative size-4 appearance-none before:absolute before:left-0 before:top-0 before:size-4 before:rounded before:border before:border-color-shadow-blue checked:before:border-color-green checked:before:bg-color-green"
        />
        <span>{name}</span>
      </label>
    </li>
  );
};
