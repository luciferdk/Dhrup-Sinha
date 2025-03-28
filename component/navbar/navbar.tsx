"use client";
import { useRouter } from "next/navigation";


const NavList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Experties", path: "/experties" },
  { name: "Project", path: "/project" },
];
export default function NavBar() {
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

      <nav className="flex justify-center bg-gray-800 p-4">
        <ul className="flex">
        {NavList.map((item) => (
          <li key={item.path} className="flex ">
          <button
          onClick={() => handleNavigation(item.path)}
          className=" flex  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {item.name}
        </button></li>
        ))}
        </ul>
      </nav>
   
  );
}
