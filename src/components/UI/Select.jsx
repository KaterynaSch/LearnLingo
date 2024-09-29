export const Select = ({ options, label, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={label}
        className="text-lightGray text-xs md:text-sm font-medium"
      >
        {label}
      </label>
      <select
        name={label}
        id={label}
        value={value}
        onChange={onChange}
        className="text-text text-sm md:text-lg font-medium px-4 py-3 md:px-[18px] md:py-[14px] rounded-xl focus:outline-none"
      >
        {options.map(({ label, value }, idx) => (
          <option
            key={idx}
            value={value}
            className="text-sm md:text-lg font-medium text-lightGray focus:bg-white focus:text-text"
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
