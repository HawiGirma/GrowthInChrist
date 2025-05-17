import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-6 scroll-smooth relative">
      <header className="flex items-center font-sora justify-between">
        <Link to="/" className="text-xl font-bold tracking-wider uppercase">
          Body-Of-Christ
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link to="/about" className="text-sm hover:text-red-500">
            About
          </Link>
          <Link to="/service" className="text-sm hover:text-red-600">
            Services
          </Link>
          {/* <a href="#" className="text-sm hover:text-red-600">
            Programs
          </a> */}
          <Link to="/contact" className="text-sm hover:text-red-600">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center space-x-6">
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link
            to="/gallery"
            className="text-sm hover:text-red-600 uppercase md:block"
          >
            Gallery
          </Link>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-4 py-6 border-b">
            <Link
              to="/"
              className="text-xl font-bold tracking-wider uppercase"
              onClick={closeMenu}
            >
              Body-Of-Christ
            </Link>
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col px-4 py-8 space-y-6">
            <Link
              to="/"
              className="text-lg font-medium hover:text-red-500 border-b border-gray-100 pb-4"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium hover:text-red-500 border-b border-gray-100 pb-4"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/service"
              className="text-lg font-medium hover:text-red-600 border-b border-gray-100 pb-4"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium hover:text-red-600 border-b border-gray-100 pb-4"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/gallery"
              className="text-lg font-medium hover:text-red-600 uppercase"
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </nav>

          <div className="mt-auto p-6 border-t">
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-gray-500">Connect with us</p>
              <div className="flex space-x-4">
                {/* You can add social media icons here */}
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600">FB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600">IG</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600">TW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
