import NavBar from "../navbar/navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function NavbarLayout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar /> {/* NavBar will appear on all pages */}
      <main>{children}</main> {/* Render the content of the current page */}
    </div>
  );
}
