import React from "react";
import clsx from "clsx";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx("px-3 py-1 rounded-full text-sm font-bold", className)}
    >
      {children}
    </span>
  );
}
