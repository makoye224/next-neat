"use client";

import Image from "next/image";

import { CustomButtonProps } from "@types";

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  bg,
  col,
  handleClick,
}: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn hover:bg-red-700 bg-${bg} ${containerStyles}`}
    onClick={handleClick}
  >
    <span
      className={`flex-1 text-${col} hover:text-white font-extrabold ${textStyles}`}
    >
      {title}
    </span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default Button;
