import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.97]";

  const sizes = {
    sm: "min-h-[34px] px-3.5 text-xs rounded-lg",
    md: "min-h-[42px] px-5 text-sm rounded-xl",
    lg: "min-h-[50px] px-7 text-base rounded-xl",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 focus:ring-indigo-400 shadow-lg shadow-indigo-200/60 hover:shadow-xl hover:shadow-indigo-300/40",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200 focus:ring-gray-300",
    success:
      "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 focus:ring-emerald-400 shadow-lg shadow-emerald-200/60 hover:shadow-xl hover:shadow-emerald-300/40",
    danger:
      "bg-gradient-to-r from-rose-500 to-red-600 text-white hover:from-rose-600 hover:to-red-700 focus:ring-rose-400 shadow-lg shadow-rose-200/60 hover:shadow-xl hover:shadow-rose-300/40",
    warning:
      "bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600 focus:ring-amber-300 shadow-lg shadow-amber-200/60 hover:shadow-xl hover:shadow-amber-300/40",
    outline:
      "border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-300 bg-white",
    ghost:
      "text-gray-600 hover:bg-gray-100 focus:ring-gray-300 bg-transparent hover:text-gray-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${sizes[size]} ${variants[variant] ?? variants.primary} ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>{children}</span>
        </span>
      ) : (
        <>
          {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
