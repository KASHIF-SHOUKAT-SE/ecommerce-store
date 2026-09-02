import React from "react";
import { Link } from "react-router-dom";

export type ButtonVariant = "primary" | "outline" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  icon,
  to,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "h-[38px] rounded-[2px] text-[12px] font-medium cursor-pointer transition flex items-center justify-center gap-2.5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2";

  const variantStyles = {
    primary: "bg-[#e64747] text-white hover:bg-[#d93d3d] border-0",
    secondary: "bg-black text-white hover:bg-gray-800 border-0",
    outline: "bg-white text-black border border-[#bdbdbd] hover:bg-gray-50",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  const classes = `${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;