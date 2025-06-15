import { FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white py-6 px-4 mt-auto bg-[#071B1A]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl mx-auto">
        {/* Text */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} <span className="font-semibold">AlgoTree</span> 🌳. Made with ❤️ for coders.
        </p>

        {/* Portfolio Link with Icon */}
        <a
          href="https://gobinda-gagan-dey.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm underline hover:text-green-300 transition duration-300"
        >
          <FaGlobe className="text-lg" />
          Portfolio by Gobinda Gagan Dey
        </a>
      </div>
    </footer>
  );
}
