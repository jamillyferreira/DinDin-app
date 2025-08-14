import React, { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

export const Input = React.forwardRef(
  ({ label, icon: Icon, type, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === "password" && showPassword ? "text" : type;

    const togglePassword = () => setShowPassword(!showPassword);

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={rest.name}
            className="text-sm font-medium text-lightGray"
          >
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
            ref={ref}
            type={inputType}
            {...rest}
            placeholder={rest.placeholder}
            className={`pl-10 pr-5 w-full rounded-xl py-2 text-sm text-lightGray outline-none transition-colors duration-100 cursor-pointer ${
              error
                ? "border border-danger"
                : "border border-gray-400 focus:border-greenLight hover:border-greenLight"
            }`}
          />
          {/* Botão de mostrar/ocultar senha */}
          {type === "password" && (
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 text-lightGray -translate-y-1/2"
            >
              {showPassword ? (
                <PiEyeLight size={18} />
              ) : (
                <PiEyeSlash size={18} />
              )}
            </button>
          )}
        </div>
        {error && <span className="text-danger text-xs">{error}</span>}
      </div>
    );
  }
);
