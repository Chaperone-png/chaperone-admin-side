import { ButtonProps } from "@/types/common";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  leftIcon,
  rightIcon,
  leftIconAction,
  rightIconAction,
  className = "",
  align = "center",
  disabled = false,
}) => {
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`flex items-center gap-2 py-2 px-4 font-semibold rounded-full 
        justify-${align} 
        ${disabled ? "bg-gray-400 text-gray-700 cursor-not-allowed" : ""} 
        ${className}`}
    >
      {leftIcon && (
        <span
          onClick={!disabled ? leftIconAction : undefined}
          className="icon-wrapper cursor-pointer"
        >
          {leftIcon}
        </span>
      )}
      <span>{content}</span>
      {rightIcon && (
        <span
          onClick={!disabled ? rightIconAction : undefined}
          className="icon-wrapper cursor-pointer"
        >
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
