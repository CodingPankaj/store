import { NavLink } from "react-router-dom";

export const HeaderNavbar = () => {
  return (
    <nav className="hidden items-center lg:flex">
      <ul className="flex items-center gap-2">
        <NavItems label={"Home"} path={"/"} />
        <NavItems label={"Shop"} path={"/shop"} />
        <NavItems label={"Cart"} path={"/cart"} />
        <NavItems label={"About"} path={"/about"} />
      </ul>
    </nav>
  );
};

const NavItems = ({ path, label }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${isActive ? "bg-color-yellow text-color-navy-blue" : "text-color-white"} rounded-full px-4 py-1 text-base font-bold`
        }
      >
        {label}
      </NavLink>
    </li>
  );
};
