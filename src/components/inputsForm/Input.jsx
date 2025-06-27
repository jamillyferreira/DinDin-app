function Input({ label, icon: Icon, placeholder, name, error }) {
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
          placeholder={placeholder}
          className={`pl-10 pr-5 w-full border rounded-xl py-2 text-sm text-lightGray outline-none transition-colors duration-100 cursor-pointer ${
            error
              ? "border border-danger"
              : "border border-lightGray focus:border-greenLight hover:border-greenLight"
          }`}
        />
      </div>
      {error && <span className="text-danger text-xs mt-1">{error}</span>}
    </div>
  );
}

export default Input;
