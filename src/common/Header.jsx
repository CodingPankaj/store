import { Link } from "react-router-dom";
import { HeaderNavbar } from "../headerComponents/HeaderNavbar";
import { HeaderRight } from "../headerComponents/HeaderRight";

export const Header = () => {
  return (
    <header className="bg-color-navy-blue w-full px-4 py-2 shadow-md md:px-6 md:py-3">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] align-middle">
        <figure className="w-32">
          <Link to={"/"}>
            <img src="images/logo.svg" alt="Logo" className="w-full" />
          </Link>
        </figure>
        <HeaderNavbar />
        <HeaderRight />
      </div>
    </header>
  );
};
