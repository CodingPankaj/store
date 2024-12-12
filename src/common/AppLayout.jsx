import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Overlay } from "./Overlay";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Overlay />
    </>
  );
};
