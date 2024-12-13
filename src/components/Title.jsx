export const Title = ({ title = "Title", customStyle = "" }) => {
  return (
    <h3
      className={`text-2xl font-bold tracking-wide text-color-navy-blue ${customStyle}`}
    >
      {title}
    </h3>
  );
};
