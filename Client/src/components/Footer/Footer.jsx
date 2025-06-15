import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-white py-6 px-4 mt-auto bg-[#071B1A]">
      <div className="flex flex-col md:flex-row items-center justify-center  gap-4 max-w-5xl mx-auto">
        {/* Text */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} <span className="font-semibold">AlgoTree</span>. Made with ❤️ for coders.
        </p>

        {/* Icons */}
        <div className="flex gap-4 text-white text-xl">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
