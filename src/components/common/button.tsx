import React from "react";

export type ButtonVariant = "primary" | "outline";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  icon,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "h-[38px] rounded-[2px] text-[12px] font-medium cursor-pointer transition flex items-center justify-center gap-2.5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-[#e64747] text-white hover:bg-[#d93d3d] border-0",
    outline: "bg-white text-black border border-[#bdbdbd] hover:bg-gray-50",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`.trim()}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
