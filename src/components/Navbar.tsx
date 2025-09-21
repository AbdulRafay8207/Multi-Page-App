import { Link } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            EduSpark
          </span>
        </Link>

        {/* Hamburger Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 p-4 md:p-0 md:mt-0 md:flex-row md:space-x-8 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:md:bg-transparent">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:hover:text-white md:dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:hover:text-white md:dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
            {/* Future links like Services, Pricing can go here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
