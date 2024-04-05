import React from "react";
import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?: string;
  variant2?: string;
  color?: string;
};
const Button = ({
  type,
  title,
  icon,
  variant,
  variant2,
  color,
}: ButtonProps) => {
  return (
    <button
      className={`  border ml-2 font-bold py-1 px-4 rounded-3xl inline-flex items-center mb-2  ${color} ${variant} ${variant2}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={12} height={12} />}
      <span className="ml-2  font-bold py-2 ">{title}</span>
    </button>
  );
};

export default Button;
