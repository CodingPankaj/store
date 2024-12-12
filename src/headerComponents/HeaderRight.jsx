import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

export const HeaderRight = () => {
  return (
    <div className="flex items-center justify-end">
      <ul className="flex items-center gap-3 lg:gap-5">
        <HeaderActions>
          <GoHeart />
          <HeaderActionsItemCounter />
        </HeaderActions>
        <HeaderActions>
          <HiOutlineShoppingBag />
          <HeaderActionsItemCounter />
        </HeaderActions>
      </ul>
    </div>
  );
};

const HeaderActions = ({ children }) => {
  return (
    <li className="relative text-2xl">
      <Link className="text-color-white">{children}</Link>
    </li>
  );
};

const HeaderActionsItemCounter = () => {
  return (
    <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-color-yellow text-xs text-color-navy-blue">
      0
    </span>
  );
};
