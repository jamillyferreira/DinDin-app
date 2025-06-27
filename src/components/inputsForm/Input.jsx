function Input({
  label,
  icon: Icon,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-lightGray">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-primary">
            <Icon />
          </span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`pl-10 pr-5 w-full border border-lightGray rounded-xl py-2 text-sm text-lightGray outline-none focus:border-greenLight hover:border-greenLight transition-colors duration-100 cursor-pointer`}
        />
      </div>
    </div>
  );
}

export default Input;
