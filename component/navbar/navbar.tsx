//

"use client";

import { useState } from "react";


// list of array for page along path
const NavList = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Expertise", id: "expertise" },
  { name: "Project", id: "project" },
  { name: "Contact", id: "contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Scroll to section smoothly
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // close menu after click on mobile
  };

  return (
    <nav className="bg-transparent p-3 sticky top-0 z-50 backdrop-blur-md">
      <div className="flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div
          className={`text-black font-bold flex-shrink-0 md:block ${
            isOpen ? "hidden" : "block"
          }`}
        >
          xDev
        </div>

        {/* Nav Items */}
        <div
          className={`flex justify-center flex-wrap gap-1 sm:gap-2 flex-1 overflow-hidden ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          {NavList.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-black hover:bg-blue-500 py-1 px-2 sm:py-2 sm:px-3 rounded text-xs sm:text-sm"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Menu Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="text-black flex-shrink-0 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
