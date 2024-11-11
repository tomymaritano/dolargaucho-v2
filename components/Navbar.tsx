import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 text-white shadow-md">
      <div className="container flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="space-x-8">
          <Link href="/" className="hover:text-gray-300">
            Inicio
          </Link>
          <Link href="/Dolar" className="hover:text-gray-300">
            Dolar
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contacto
          </Link>
        </div>

        <div className="space-x-8">
          <Link href="/" className="hover:text-gray-300">
            Inicio
          </Link>
          <Link href="/Dolar" className="hover:text-gray-300">
            Dolar
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contacto
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block py-2 px-4 text-white hover:bg-blue-700">
            Inicio
          </Link>
          <Link href="/dolar" className="block py-2 px-4 text-white hover:bg-blue-700">
            Dolar
          </Link>
          <Link href="/contact" className="block py-2 px-4 text-white hover:bg-blue-700">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;