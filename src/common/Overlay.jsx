import { useContext } from "react";
import { MainContext } from "../context/MainContext";

export const Overlay = () => {
  const { overlay } = useContext(MainContext);
  return (
    <div
      className={`fixed left-0 top-0 z-[15] h-full w-full bg-black/50 backdrop-blur-md ${overlay ? "block" : "hidden"}`}
    ></div>
  );
};
