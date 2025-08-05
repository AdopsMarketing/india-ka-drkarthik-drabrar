'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Joint- Replacement", href: "/joint-replacement" },
    { label: "Patient Resources", href: "/patient-resources" },
    { label: "Locations", href: "/locations" },
    { label: "Patient Stories", href: "/patient-stories" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-white  w-full z-100 font-montserrat shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto ">
        {/* Logo */}
        <Link href="/" passHref>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3918405b6a78d82918b0c234d51615bcae88a442?placeholderIfAbsent=true"
            alt="Dr. Karthik M S Logo"
            className="w-20 h-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-lg font-semibold text-black">
          {navItems.map(({ label, href }) => (
            <Link key={label} href={href} className="px-2 py-1 hover:text-blue-600">
              {label}
            </Link>
          ))}
          <Link
            href="/book-consultation"
            className="bg-blue-700 text-white px-5 py-2 rounded-[10px] hover:bg-blue-800"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white px-6 py-4 space-y-4 text-lg font-semibold text-black">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book-consultation"
            className="block bg-blue-700 text-white px-5 py-2 rounded-[10px] text-center hover:bg-blue-800"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Book Consultation
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
