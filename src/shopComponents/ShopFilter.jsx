import { Title } from "../components/Title";
import { CategoryCheckboxFilter } from "./CategoryCheckboxFilter";
import { CategoryClickFilter } from "./CategoryClickFilter";

export const ShopFilter = () => {
  return (
    <div className="sticky top-10 flex flex-col gap-5">
      <Title title="Filter Product" />
      <CategoryClickFilter />
      <CategoryCheckboxFilter />
    </div>
  );
};
