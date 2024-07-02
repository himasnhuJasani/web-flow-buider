import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "outlet" | "solid";
  className?: string;
  onClick?: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "outlet",
  className,
  ...res
}) => {
  const buttonVariant = {
    outlet: "hover:bg-tertiary",
    solid: "bg-primary border border-border-color hover:bg-background",
  };

  const buttonClasses = buttonVariant[variant];

  return (
    <button
      {...res}
      className={`px-[6px] py-1 ${className} ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
