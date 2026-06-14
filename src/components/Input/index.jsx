import React, { useState } from "react";

const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
  disabled = false,
  error = null,
  helperText = null,
  icon = null,
  required = false,
}) => {
  const [focused, setFocused] = useState(false);
  const inputMode = type === "number" ? "decimal" : undefined;

  const hasValue = value !== "" && value !== null && value !== undefined;
  const isFloating = focused || hasValue;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div
        className={`relative rounded-xl transition-all duration-200 bg-white ${
          error
            ? "border-2 border-red-300 focus-within:border-red-500 focus-within:shadow-sm focus-within:shadow-red-100"
            : focused
              ? "border-2 border-indigo-500 shadow-sm shadow-indigo-100"
              : "border-2 border-gray-200 hover:border-gray-300"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {/* Left icon */}
        {icon && (
          <div
            className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
              focused ? "text-indigo-500" : "text-gray-400"
            }`}
          >
            {icon}
          </div>
        )}

        {/* Floating label */}
        {label && (
          <label
            className={`
              absolute transition-all duration-200 pointer-events-none select-none
              ${icon ? "left-11" : "left-3.5"}
              ${
                isFloating
                  ? "text-[10px] font-semibold -top-2.5 translate-y-0 bg-white px-1.5 left-3 tracking-wide"
                  : "text-sm text-gray-500 top-1/2 -translate-y-1/2"
              }
              ${
                error && !focused
                  ? "text-red-500"
                  : focused
                    ? "text-indigo-600"
                    : ""
              }
            `}
          >
            {label}
            {required && <span className="text-red-400 ml-0.5">*</span>}
          </label>
        )}

        {/* Actual input */}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={isFloating ? placeholder || "" : ""}
          disabled={disabled}
          inputMode={inputMode}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={!!error}
          className={`
            w-full bg-transparent outline-none text-gray-900 rounded-xl
            ${icon ? "pl-[44px]" : "pl-3.5"}
            ${label ? (isFloating ? "pt-5 pb-2" : "py-3.5") : "py-3.5"}
            pr-3.5 text-sm font-medium
            placeholder:text-gray-400
            disabled:cursor-not-allowed
            transition-colors
          `}
        />
      </div>

      {/* Error / Helper */}
      <div className="flex items-center gap-1.5 min-h-[18px] px-1">
        {error ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-400 flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-[11px] text-red-500 font-medium">{error}</p>
          </>
        ) : helperText ? (
          <p className="text-[11px] text-gray-400 font-medium">{helperText}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
