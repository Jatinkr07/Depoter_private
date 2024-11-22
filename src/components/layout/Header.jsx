import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons

import logoTxt from "../../assets/header/logoText.png";
import logo from "../../assets/header/logo.png";
import Container from "../global/Container";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const pages = Array.from({ length: 7 }, (_, i) => `page${i + 2}`);
  const handleChange = (event) => {
    const selectedPage = event.target.value;
    // Navigate to the selected page
    if (selectedPage) {
      navigate(selectedPage);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu on click for mobile devices
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`w-full text-black py-4 fixed top-0 z-50 transition-colors duration-300 ${
        isSticky ? "bg-[#FFBE2E]" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="md:h-[68px] h-8" />
            <img src={logoTxt} alt="Logo Text" className="md:h-[68px] h-10" />
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="text-3xl text-black lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation Links and Right Section */}
          <nav
            className={`lg:flex items-center  space-x-12 ${
              isMenuOpen
                ? "flex flex-col items-center justify-center absolute top-0 left-0 right-0 bg-white md:h-0 h-[45vh] space-y-2 pr-8 "
                : "hidden"
            } lg:block`}
          >
            {isMenuOpen && (
              <button
                className="absolute text-3xl text-black top-4 right-4"
                onClick={toggleMenu}
              >
                <FiX />
              </button>
            )}
            <select
              onChange={handleChange}
              defaultValue=""
              className="p-2 mt-2 border border-gray-300 rounded-md shadow-sm w-fit focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select a page
              </option>
              {pages?.map((elem) => (
                <option key={elem} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
            <a
              href="#"
              className="text-lg md:text-[20px] text-black no-underline "
            >
              Order Fulfillment
            </a>
            <a
              href="#"
              className="no-underline text-black text-lg md:text-[20px]"
            >
              Services
            </a>
            <a
              href="#"
              className="no-underline text-black text-lg md:text-[20px]"
            >
              About us
            </a>
            <a
              href="#"
              className="no-underline text-black text-lg md:text-[20px]"
            >
              Careers
            </a>

            {/* Right Section - Buttons */}
            <div className="grid items-center grid-cols-1 space-x-5 space-y-3 md:space-y-0 md:grid-cols-2 ">
              <button className="px-4 py-2 md:px-4 md:py-2 transition duration-300 border border-black rounded hover:bg-black hover:text-white text-sm md:text-[20px]">
                Get a Quote
              </button>
              <button className=" px-4 py-2 md:px-4 md:py-3  transition duration-300 bg-black text-white rounded hover:text-gray-900  hover:bg-gray-100  text-sm md:text-[20px] ">
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
