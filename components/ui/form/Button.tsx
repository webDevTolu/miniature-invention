import { ReactNode } from "react";

interface ButtonProps {
  type: "button" | "submit";
  style?: "flat" | "round" | "pill";
  onClick?: () => void;
  size?: "base" | "small" | "large";
  color?: "primary" | "light" | "dark";
  title: string;
  icon?: {
    iconElement: ReactNode;
    iconPosition: "left" | "right";
  };
}

export const Button = ({
  type,
  style,
  onClick,
  size,
  color,
  title,
  icon,
}: ButtonProps) => {
  const sizeStyles: string = `${
    size === "small"
      ? "text-sm p-2"
      : size === "large"
      ? "text-lg p-4"
      : size === "base"
      ? "text-base font-bold py-2 px-5 w-max h-max"
      : "text-lg py-2 px-5"
  }`;
  const colorStyles: string = `${
    color === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : color === "light"
      ? "bg-red-600 text-white hover:bg-red-700"
      : color === "dark"
      ? "bg-portfolio-main-subtle hover:bg-portfolio-main-primary text-white"
      : ""
  }`;
  const roundedStyles: string = `${
    style === "pill"
      ? "rounded-full"
      : style === "flat"
      ? "rounded-none"
      : style === "round"
      ? "rounded-lg"
      : "rounded"
  }`;

  const handleClick = () => {
    if (type === "button") {
      onClick && onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`flex items-start gap-2.5 ${sizeStyles} ${colorStyles} ${roundedStyles}`}
    >
      {icon && icon.iconPosition === "left" && (
        <span className="text-white">{icon.iconElement}</span>
      )}
      <span>{title}</span>
      {icon && icon.iconPosition === "right" && (
        <span className="text-white">{icon.iconElement}</span>
      )}
    </button>
  );
};

