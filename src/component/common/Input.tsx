import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, required, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label className="text-gray-500 text-sm">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={`bg-[#F5F5F5] h-[50px] rounded px-4 text-sm outline-none focus:ring-1 transition-shadow w-full ${
            error ? 'border border-red-500 focus:ring-red-200' : 'border-none focus:ring-gray-300'
          } ${className}`}
          {...props}
        />
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
