export const ResetFilter = ({ resetFilter }) => {
  return (
    <div className="mt-4">
      <button
        onClick={resetFilter}
        className="w-full rounded-full bg-color-yellow px-4 py-2"
      >
        Reset Filter
      </button>
    </div>
  );
};
