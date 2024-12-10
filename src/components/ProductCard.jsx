export const ProductCard = ({ product }) => {
  const { name, brand_name, price, image } = product;
  return (
    <div className="flex flex-col gap-3 rounded-[10px] bg-color-white p-4">
      <div className="flex items-center justify-center rounded-lg bg-color-grey-dark">
        <figure className="w-[180px]">
          <img src={image} className="w-full object-cover" />
        </figure>
      </div>
      <div className="flex grow flex-col gap-1">
        <h3 className="text-base font-bold tracking-wide text-color-navy-blue">
          {name}
        </h3>
        <span className="mb-auto text-xs font-medium text-color-shadow-blue">
          {brand_name}
        </span>
        <div className="mt-4 flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold tracking-wide text-color-orange">
            ${price}
          </h3>
          <button className="rounded-full bg-color-navy-blue px-6 py-2 text-color-white">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
