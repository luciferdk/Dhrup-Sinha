import React from "react";
import clsx from "clsx"; // Optional: Use clsx for conditional class merging

interface CardProps {
  children: React.ReactNode;
  className?: string; // Add the className prop
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("bg-white shadow-md rounded-lg p-4", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div className={clsx("p-4", className)}>
      {children}
    </div>
  );
}