import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTachometerAlt, FaCode } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
  { name: "Problems", path: "/problems", icon: <FaCode /> },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className=" transition-transform duration-300 w-20 st md:w-64 h-screen  bg-[#071B1A] text-white p-4 space-y-6 flex flex-col items-center md:items-start  ease-in-out">
      <nav className="flex flex-col gap-6 w-full mt-16">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-2 md:gap-4 px-3 py-2 rounded-lg transition-all duration-300 ease-in-out ${
              location.pathname === link.path
                ? "bg-[#78B801]"
                : "hover:bg-[#87b464]"
            }`}
          >
            <span className="text-xl transition-transform duration-300 group-hover:scale-110">
              {link.icon}
            </span>
            <span className="hidden md:inline">{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
