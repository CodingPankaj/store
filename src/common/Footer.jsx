import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { footerMenuData } from "../constant/footerMenuData";

export const Footer = () => {
  return (
    <footer className="w-full bg-color-navy-blue px-4 py-10 md:px-6">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <figure className="w-32">
            <Link to={"/"}>
              <img src="images/logo.svg" alt="Logo" className="w-full" />
            </Link>
          </figure>
          <p className="mt-5 text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            at congue risus. Sed commodo dapibus urna eget malesuada.
            Suspendisse sed lectus ex.
          </p>
          <div className="flex items-center gap-4 text-2xl text-color-grey-light">
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaLinkedin />
          </div>
        </div>

        {footerMenuData.map((item, index) => {
          const menuTitle = Object.keys(item)[0];

          return (
            <FooterMenu
              key={index}
              menuTitle={menuTitle}
              item={item[menuTitle]}
            />
          );
        })}
      </div>
    </footer>
  );
};

const FooterMenu = ({ menuTitle = "Menu Name", item }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-base text-color-grey-light opacity-70">
        {menuTitle}
      </h4>
      <ul className="flex flex-col gap-2 text-[17px] text-color-white">
        {item.map((item, index) => (
          <li key={index}>
            <Link>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
