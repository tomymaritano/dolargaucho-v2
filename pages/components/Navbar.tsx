import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../public/Flow.svg';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/70 backdrop-blur-lg text-white z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold">
          <Link href="/" className="hover:text-gray-300 transition">
            <Image src={logo} alt="Logo" width={40} height={40} />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link href="/home" className="hover:text-gray-300 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-300 transition">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black backdrop-blur-md text-white transition-transform transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40`}
      >
        {/* Botón de cierre */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none hover:text-red-500 transition"
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-semibold">
          <li>
            <Link href="/home" onClick={closeMenu} className="hover:text-blue-500 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu} className="hover:text-blue-500 transition">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMenu} className="hover:text-blue-500 transition">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu} className="hover:text-blue-500 transition">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;