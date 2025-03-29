"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Experties", path: "/experties" },
  { name: "Project", path: "/project" },
];
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (isOpen: boolean) => {
    setIsOpen((prev) => !prev);
  };

  const router = useRouter();

  const handleNavigation = (path: string) => {
    try {
      if (path === "/") {
        router.push("/");
      } else {
        router.push(`/allPages${path}`);
      }
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <nav className="grid grid-cols-8 gap-1 bg-gray-800 p-4  ">
      {/* First Div */}
      <div
        className={`col-start-1 col-end-1 ${!isOpen ? "block" : "hidden"} md:block`}
      >
        <div className="py-2 text-white font-bold">xDev</div>
      </div>

      {/* Second Div */}
      <div
        className={`   transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block`}
      >
        <ul className="flex">
          {NavList.map((item) => (
            <li key={item.path} className="flex ">
              <button
                onClick={() => handleNavigation(item.path)}
                className=" flex  bg-gray-500 hover:bg-blue-500 text-white ml-4 font-bold py-2 px-4 rounded"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Third Div */}

      <div
        className={`col-start-8 col-end-8 justify-self-end  ${isOpen ? "block" : "hidden"}md:hidden `}
      >
        <button
          onClick={() => {
            toggleMenu(isOpen);
          }}
          className=" py-2 text-white text-center rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
