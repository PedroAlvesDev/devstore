"use client";

import { ReactNode } from "react";

interface ButtonAddProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function ButtonAdd({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonAddProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer relative rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}