import { useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1400px] py-4">
        <p className="text-lg font-medium text-color-navy-blue">
          Home <span className="text-color-shadow-blue">{path}</span>
        </p>
      </div>
    </section>
  );
};
