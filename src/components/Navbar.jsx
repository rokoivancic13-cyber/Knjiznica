// src/components/Navbar.jsx

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Početna", href: "/" },
    { name: "O nama", href: "/about" },
    { name: "Aktivnosti", href: "#activities" },
    { name: "Galerija", href: "#gallery" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-xl">
            H
          </div>

          <div>
            <h1 className="text-xl font-bold text-red-700">HKD Napredak</h1>

            <p className="text-xs text-gray-500">Kulturno društvo</p>
          </div>
        </Link>

        {/* Desktop meni */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="
                text-gray-700
                font-medium
                hover:text-red-700
                transition
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Dugme */}
        <Link
          to="/about"
          className="
            hidden md:block
            bg-red-700
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            hover:bg-red-800
            transition
          "
        >
          Učlani se
        </Link>

        {/* Mobile dugme */}
        <button
          className="md:hidden text-3xl text-red-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile meni */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-5 gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-gray-700
                  hover:text-red-700
                  transition
                "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
