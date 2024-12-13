import { GoStar, GoStarFill } from "react-icons/go";
import { CategoryTitle } from "./CategoryTitle";

export const RatingFilter = ({ title }) => {
  return (
    <div className="border-color-shadow-blue/60 flex w-full flex-col border-b py-1">
      <CategoryTitle title={title} />
      <div className="flex gap-2 pb-2 text-xl text-color-orange">
        <GoStarFill />
        <GoStarFill />
        <GoStarFill />
        <GoStarFill />
        <GoStar />
      </div>
    </div>
  );
};
