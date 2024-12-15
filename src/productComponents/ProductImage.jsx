export const ProductImage = ({ product }) => {
  const { image, multiple_images } = product;
  console.log(multiple_images);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center overflow-hidden rounded-lg bg-color-grey-dark">
        <figure className="w-full">
          <img src={image} className="w-full object-cover" />
        </figure>
      </div>
      <div className="flex gap-5">
        <figure className="w-[200px] overflow-hidden rounded-lg bg-color-grey-dark">
          <img src={multiple_images[0]} className="w-full" />
        </figure>
        <figure className="w-[200px] overflow-hidden rounded-lg bg-color-grey-dark">
          <img src={multiple_images[1]} className="w-full" />
        </figure>
        <figure className="w-[200px] overflow-hidden rounded-lg bg-color-grey-dark">
          <img src={multiple_images[1]} className="w-full" />
        </figure>
        <figure className="w-[200px] overflow-hidden rounded-lg bg-color-grey-dark">
          <img src={multiple_images[2]} className="w-full" />
        </figure>
      </div>
    </div>
  );
};
