import type { Button as ButtonType } from "../../../types/button";

export const Button = ({
  variant = "solid",
  children,
}: ButtonType) => {

  const baseClasses =
    "rounded-[8px] w-full transition duration-300 ease-in-out cursor-pointer";


  const variantClasses = {
    solid: "bg-[var(--btn-bg)] text-white hover:bg-[var(--primary-hover)] font-bold h-[40px]",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
    ghost: "text-blue-500 hover:bg-blue-50",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      style={{ padding: "10px" }}
    >
      {children}
    </button>
  );
};
