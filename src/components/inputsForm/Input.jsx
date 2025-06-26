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
          className={`pl-10 pr-5 w-full border border-lightGray rounded-lg py-2 text-sm text-lightGray outline-none`}
        />
      </div>
    </div>
  );
}

export default Input;
