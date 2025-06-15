import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaHome, FaTachometerAlt, FaCode } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
  { name: "Problems", path: "/problems", icon: <FaCode /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 text-white bg-[#071B1A] z-100   sticky top-0 left-0 w-full">
        <div className="w-full md:w-9/12 mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-wide">
            Algo<span className="text-[rgb(120,184,1)]">Tree</span>
          </h1>

          <div className="flex items-center gap-4">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-[#78B801] transition ${
                    location.pathname === link.path ? "text-[#78B801]" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Button */}
            <Link
              to="/dashboard"
              className="hidden md:inline-block bg-[#78B801] text-gray-100 font-semibold px-4 py-2 rounded-lg hover:bg-[#5d7236] transition"
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <RxCross2 className="h-6 w-6 text-white" />
            ) : (
              <IoMdMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar with Slide Animation */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#071B1A] text-white z-50 p-6 shadow-xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-xl md:text-3xl font-extrabold tracking-wide">
          Algo<span className="text-[#78B801]">Tree</span>
        </h1>
        <div className="w-full bg-amber-50 rounded-3xl border-b mt-3"></div>

        {/* Dynamic Links */}
        <nav className="flex flex-col space-y-4 text-lg mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 hover:text-[#78B801] transition ${
                location.pathname === link.path ? "text-[#78B801]" : ""
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </Link>
          ))}

          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="bg-[#78B801] text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-[#78b801bb] transition mt-4"
          >
            Get Started
          </Link>
        </nav>
      </div>

      {/* Overlay Background for Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
